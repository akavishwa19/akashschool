import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorSecondarySectionComponent } from './senior-secondary-section.component';

describe('SeniorSecondarySectionComponent', () => {
  let component: SeniorSecondarySectionComponent;
  let fixture: ComponentFixture<SeniorSecondarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorSecondarySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeniorSecondarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
