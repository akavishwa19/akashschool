import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFeesStructureComponent } from './admission-fees-structure.component';

describe('AdmissionFeesStructureComponent', () => {
  let component: AdmissionFeesStructureComponent;
  let fixture: ComponentFixture<AdmissionFeesStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionFeesStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionFeesStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
