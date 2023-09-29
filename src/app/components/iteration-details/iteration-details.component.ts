import { Component, Input } from '@angular/core';
import { DoorTypes } from 'src/app/constants/door-types';

@Component({
  selector: 'app-iteration-details',
  templateUrl: './iteration-details.component.html',
  styleUrls: ['./iteration-details.component.scss']
})
export class IterationDetailsComponent {
  @Input() type: DoorTypes = DoorTypes.GOAT;

  getTypeString(){
    switch(this.type) {
      case DoorTypes.GOAT:
        return "Goat";
        case DoorTypes.CAR:
        return "Car";
        default:
        return "Goat";
    }
  }
}
