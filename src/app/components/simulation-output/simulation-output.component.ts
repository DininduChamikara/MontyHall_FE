import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simulation-output',
  templateUrl: './simulation-output.component.html',
  styleUrls: ['./simulation-output.component.scss']
})
export class SimulationOutputComponent {
  @Input() carWinPercentage: number = 0;
  @Input() goatWinPercentage: number = 0;

}
