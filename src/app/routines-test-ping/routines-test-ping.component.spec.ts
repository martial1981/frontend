import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesTestPingComponent } from './routines-test-ping.component';

describe('RoutinesTestPingComponent', () => {
  let component: RoutinesTestPingComponent;
  let fixture: ComponentFixture<RoutinesTestPingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesTestPingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesTestPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
