import { Component } from '@angular/core';
import { DoorTypes } from './constants/door-types';
import { DoorActions } from './constants/door-actions';
import { SimulationInputClickevent } from './components/simulation-input/simulation-input-clickevent.interface';
import { Door } from './models/door';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private apiService: ApiService){}

  door1 = new Door(0);
  door2 = new Door(1);
  door3 = new Door(2);

  doors = [this.door1, this.door2, this.door3];

  userSelection: number = -1;

  onDoorClicked(event: number){
    this.userSelection = event;
  }

  onInputPlayClick(event: SimulationInputClickevent){
    if(this.userSelection == -1){
      throw new Error("Door is not selected")
    }

    this.apiService.runSimulation(event.iterationCount, event.isKeepSelection, this.userSelection).subscribe({
      next:(response) => {
        console.log(response);
        console.log(response.iterations[0].firstDoorOpenState);
        
      },
      error:(err) => {
        console.log(err);
        
      }
    })
  }
}
