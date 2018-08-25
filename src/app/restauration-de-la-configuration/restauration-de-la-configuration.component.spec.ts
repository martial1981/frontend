import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurationDeLaConfigurationComponent } from './restauration-de-la-configuration.component';

describe('RestaurationDeLaConfigurationComponent', () => {
  let component: RestaurationDeLaConfigurationComponent;
  let fixture: ComponentFixture<RestaurationDeLaConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurationDeLaConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurationDeLaConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
