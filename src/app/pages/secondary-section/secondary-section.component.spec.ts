import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySectionComponent } from './secondary-section.component';

describe('SecondarySectionComponent', () => {
  let component: SecondarySectionComponent;
  let fixture: ComponentFixture<SecondarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondarySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
