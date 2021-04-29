import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObservationsComponent } from './user-observations.component';

describe('UserObservationsComponent', () => {
  let component: UserObservationsComponent;
  let fixture: ComponentFixture<UserObservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserObservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
