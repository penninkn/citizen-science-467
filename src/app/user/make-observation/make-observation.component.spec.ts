import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeObservationComponent } from './make-observation.component';

describe('MakeObservationComponent', () => {
  let component: MakeObservationComponent;
  let fixture: ComponentFixture<MakeObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeObservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
