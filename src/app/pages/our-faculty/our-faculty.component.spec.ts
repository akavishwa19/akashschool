import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFacultyComponent } from './our-faculty.component';

describe('OurFacultyComponent', () => {
  let component: OurFacultyComponent;
  let fixture: ComponentFixture<OurFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
