import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesTestTracertComponent } from './routines-test-tracert.component';

describe('RoutinesTestTracertComponent', () => {
  let component: RoutinesTestTracertComponent;
  let fixture: ComponentFixture<RoutinesTestTracertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesTestTracertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesTestTracertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
