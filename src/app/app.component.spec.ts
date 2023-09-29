import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DoorComponent } from './components/door/door.component';
import { IterationCountComponent } from './components/iteration-count/iteration-count.component';
import { IterationDetailsComponent } from './components/iteration-details/iteration-details.component';
import { SimulationInputComponent } from './components/simulation-input/simulation-input.component';
import { SimulationOutputComponent } from './components/simulation-output/simulation-output.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      HeaderComponent, 
      IterationCountComponent,
      DoorComponent,
      IterationDetailsComponent,
      SimulationInputComponent,
      SimulationOutputComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
