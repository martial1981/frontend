import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprissionDeLaConfigurationComponent } from './suprission-de-la-configuration.component';

describe('SuprissionDeLaConfigurationComponent', () => {
  let component: SuprissionDeLaConfigurationComponent;
  let fixture: ComponentFixture<SuprissionDeLaConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuprissionDeLaConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuprissionDeLaConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
