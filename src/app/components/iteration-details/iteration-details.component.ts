import { Component, Input } from '@angular/core';
import { DoorTypes } from 'src/app/constants/door-types';

@Component({
  selector: 'app-iteration-details',
  templateUrl: './iteration-details.component.html',
  styleUrls: ['./iteration-details.component.scss'],
})
export class IterationDetailsComponent {
  // @Input() type?: DoorTypes = DoorTypes.GOAT;
  @Input() type?: DoorTypes = DoorTypes.OTHER;

  getTypeString() {
    switch (this.type) {
      case DoorTypes.GOAT:
        return 'Won a Goat!';
      case DoorTypes.CAR:
        return 'Won a Car!';
      case DoorTypes.OTHER:
        return 'Processing...';
      default:
        return 'Select a door before simulate...';
    }
  }
}
