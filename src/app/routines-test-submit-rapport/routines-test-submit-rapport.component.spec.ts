import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesTestSubmitRapportComponent } from './routines-test-submit-rapport.component';

describe('RoutinesTestSubmitRapportComponent', () => {
  let component: RoutinesTestSubmitRapportComponent;
  let fixture: ComponentFixture<RoutinesTestSubmitRapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesTestSubmitRapportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesTestSubmitRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
