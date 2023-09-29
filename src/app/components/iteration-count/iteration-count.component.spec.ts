import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationCountComponent } from './iteration-count.component';

describe('IterationCountComponent', () => {
  let component: IterationCountComponent;
  let fixture: ComponentFixture<IterationCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IterationCountComponent]
    });
    fixture = TestBed.createComponent(IterationCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
