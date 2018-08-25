import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesTestSaveRapportComponent } from './routines-test-save-rapport.component';

describe('RoutinesTestSaveRapportComponent', () => {
  let component: RoutinesTestSaveRapportComponent;
  let fixture: ComponentFixture<RoutinesTestSaveRapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesTestSaveRapportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesTestSaveRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
