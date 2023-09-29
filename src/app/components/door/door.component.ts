import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DoorActions } from 'src/app/constants/door-actions';
import { DoorTypes } from 'src/app/constants/door-types';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent implements OnInit {
  @Input() type: DoorTypes = DoorTypes.GOAT;
  @Input() action: DoorActions = DoorActions.CLOSE;
  @Input() doorNo: number = 0;

  @Output() onClicked = new EventEmitter<number>();

  imagePath: string = "";

  ngOnInit(): void {
    this.setImagePath();
  }

  private setImagePath() {
    if (this.type === DoorTypes.GOAT) {
      this.imagePath = "assets/images/goat.png";
    } else if (this.type === DoorTypes.CAR) {
      this.imagePath = "assets/images/car.png";
    }
  }

  isDoorOpen(){
    return this.action === DoorActions.OPEN;
  }

  doorClicked(){
    this.onClicked.emit(this.doorNo)
  }
}