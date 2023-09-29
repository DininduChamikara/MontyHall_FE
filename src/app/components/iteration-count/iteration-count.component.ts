import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-iteration-count',
  templateUrl: './iteration-count.component.html',
  styleUrls: ['./iteration-count.component.scss']
})
export class IterationCountComponent {
  @Input() iterationNo: number = 0

}
