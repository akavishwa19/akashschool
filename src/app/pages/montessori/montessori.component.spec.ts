import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontessoriComponent } from './montessori.component';

describe('MontessoriComponent', () => {
  let component: MontessoriComponent;
  let fixture: ComponentFixture<MontessoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontessoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontessoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
