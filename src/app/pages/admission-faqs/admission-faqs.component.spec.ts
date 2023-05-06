import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFaqsComponent } from './admission-faqs.component';

describe('AdmissionFaqsComponent', () => {
  let component: AdmissionFaqsComponent;
  let fixture: ComponentFixture<AdmissionFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionFaqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
