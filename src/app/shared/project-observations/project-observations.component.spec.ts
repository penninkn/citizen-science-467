import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectObservationsComponent } from './project-observations.component';

describe('ProjectObservationsComponent', () => {
  let component: ProjectObservationsComponent;
  let fixture: ComponentFixture<ProjectObservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectObservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
