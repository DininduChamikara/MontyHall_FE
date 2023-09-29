import { Component, EventEmitter, Output } from '@angular/core';
import { SimulationInputClickevent } from './simulation-input-clickevent.interface';

@Component({
  selector: 'app-simulation-input',
  templateUrl: './simulation-input.component.html',
  styleUrls: ['./simulation-input.component.scss']
})
export class SimulationInputComponent {
  @Output() onPlayClicked = new EventEmitter<SimulationInputClickevent>();

  iterationCount: number = 1;
  isKeepSelection: boolean = true;

  playButtonClick(){
    this.onPlayClicked.emit({
      iterationCount:this.iterationCount,
      isKeepSelection: this.isKeepSelection
    })
  }
}
