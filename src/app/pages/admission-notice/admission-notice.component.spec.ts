import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionNoticeComponent } from './admission-notice.component';

describe('AdmissionNoticeComponent', () => {
  let component: AdmissionNoticeComponent;
  let fixture: ComponentFixture<AdmissionNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
