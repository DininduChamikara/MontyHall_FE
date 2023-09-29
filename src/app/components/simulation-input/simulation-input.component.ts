import { Component, EventEmitter, Output, Input } from '@angular/core';
import { SimulationInputClickevent } from './simulation-input-clickevent.interface';

@Component({
  selector: 'app-simulation-input',
  templateUrl: './simulation-input.component.html',
  styleUrls: ['./simulation-input.component.scss']
})
export class SimulationInputComponent {
  @Input() userSelection:number = -1; 
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
