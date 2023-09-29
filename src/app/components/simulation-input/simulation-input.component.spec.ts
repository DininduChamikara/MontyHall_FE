import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationInputComponent } from './simulation-input.component';
import { FormsModule } from '@angular/forms';

describe('SimulationInputComponent', () => {
  let component: SimulationInputComponent;
  let fixture: ComponentFixture<SimulationInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationInputComponent],
      imports:[FormsModule]
    });
    fixture = TestBed.createComponent(SimulationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
