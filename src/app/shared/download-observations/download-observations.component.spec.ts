import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadObservationsComponent } from './download-observations.component';

describe('DownloadObservationsComponent', () => {
  let component: DownloadObservationsComponent;
  let fixture: ComponentFixture<DownloadObservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadObservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
