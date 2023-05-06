import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySectionComponent } from './primary-section.component';

describe('PrimarySectionComponent', () => {
  let component: PrimarySectionComponent;
  let fixture: ComponentFixture<PrimarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
