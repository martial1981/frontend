import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesTestTroubelshootComponent } from './routines-test-troubelshoot.component';

describe('RoutinesTestTroubelshootComponent', () => {
  let component: RoutinesTestTroubelshootComponent;
  let fixture: ComponentFixture<RoutinesTestTroubelshootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesTestTroubelshootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesTestTroubelshootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
