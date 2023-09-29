import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationDetailsComponent } from './iteration-details.component';

describe('IterationDetailsComponent', () => {
  let component: IterationDetailsComponent;
  let fixture: ComponentFixture<IterationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IterationDetailsComponent]
    });
    fixture = TestBed.createComponent(IterationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
