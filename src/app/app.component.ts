import { Component } from '@angular/core';
import { SimulationInputClickevent } from './components/simulation-input/simulation-input-clickevent.interface';
import { Door } from './models/door';
import { ApiService } from './services/api.service';
import { concatMap, delay, from, map, mergeMap, of, pairs, tap } from 'rxjs';
import { ApiResponse } from './dto/api-response';
import { DoorDto } from './types/types';
import { DoorTypes } from './constants/door-types';
import { DoorActions } from './constants/door-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  door1 = new Door(0);
  door2 = new Door(1);
  door3 = new Door(2);

  doors = [this.door1, this.door2, this.door3];

  userSelection: number = -1;

  carWinPercentage: number = 0;
  goatWinPercentage: number = 0;

  iterationNo = 0;
  wonType?: DoorTypes;

  onDoorClicked(event: number) {
    this.userSelection = event;
  }

  onInputPlayClick(event: SimulationInputClickevent) {
    if (this.userSelection == -1) {
      throw new Error('Door is not selected');
    }

    this.apiService
      .runSimulation(
        event.iterationCount,
        event.isKeepSelection,
        this.userSelection
      )
      .pipe(
        tap({
          next: (value) => this.calculateWinPercentages(value, event),
        }),
        map((value) => value.iterations),
        mergeMap((value) => from(value)),
        mergeMap((value, index) => {
          const objList = Object.entries(value);
          objList.unshift(['iteration', (index + 1).toString()]);
          return from(objList);
        }),
        concatMap((value) => of(value).pipe(delay(2000))),
        tap({
          next: (res) => {
            switch (res[0]) {
              case 'iteration':
                this.wonType = undefined;
                this.iterationNo = parseInt(res[1].toString());
                break;
              case 'initialState':
                this.updateDoorStateFromBackend(res);
                break;
              case 'firstDoorOpenState':
                this.updateDoorStateFromBackend(res);
                break;
              case 'secondDoorOpenState':
                this.updateDoorStateFromBackend(res);
                break;
              case 'finalState':
                this.updateDoorStateFromBackend(res);
                break;
              case 'won':
                this.resetDoorState();
                this.wonType = this.getWonType(res[1].toString());
                break;
              default:
                break;
            }
          },
        })
      )
      .subscribe();
  }

  private updateDoorStateFromBackend(res: [string, string | DoorDto[]]) {
    const resDoorsList = res[1] as DoorDto[];
    this.doors.forEach((item, index) => {
      item.type = this.getDoorType(resDoorsList[index].obj);
      item.status = this.getDoorStatus(resDoorsList[index].status);
      return item;
    });
  }

  private resetDoorState() {
    this.doors.forEach((item) => {
      item.status = DoorActions.CLOSE;
      return item;
    });
  }

  private calculateWinPercentages(
    value: ApiResponse,
    event: SimulationInputClickevent
  ) {
    this.carWinPercentage = parseFloat(
      ((value.carWinCount / event.iterationCount) * 100).toFixed(1)
    );
    this.goatWinPercentage = 100 - this.carWinPercentage;
  }

  private getDoorType(type: string) {
    return type == 'Car' ? DoorTypes.CAR : DoorTypes.GOAT;
  }

  private getDoorStatus(status: string) {
    return status == 'Open' ? DoorActions.OPEN : DoorActions.CLOSE;
  }

  getDoorStatusStr(status: DoorActions) {
    return status == DoorActions.OPEN ? 'Open' : 'Closed';
  }

  private getWonType(type: string) {
    return type == 'Car' ? DoorTypes.CAR : DoorTypes.GOAT;
  }
}
