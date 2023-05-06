import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorPrimarySectionComponent } from './senior-primary-section.component';

describe('SeniorPrimarySectionComponent', () => {
  let component: SeniorPrimarySectionComponent;
  let fixture: ComponentFixture<SeniorPrimarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorPrimarySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeniorPrimarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
