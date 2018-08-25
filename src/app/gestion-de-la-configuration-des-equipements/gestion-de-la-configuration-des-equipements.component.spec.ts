import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeLaConfigurationDesEquipementsComponent } from './gestion-de-la-configuration-des-equipements.component';

describe('GestionDeLaConfigurationDesEquipementsComponent', () => {
  let component: GestionDeLaConfigurationDesEquipementsComponent;
  let fixture: ComponentFixture<GestionDeLaConfigurationDesEquipementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDeLaConfigurationDesEquipementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeLaConfigurationDesEquipementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
