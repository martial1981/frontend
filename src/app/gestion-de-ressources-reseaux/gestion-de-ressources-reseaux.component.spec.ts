import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeRessourcesReseauxComponent } from './gestion-de-ressources-reseaux.component';

describe('GestionDeRessourcesReseauxComponent', () => {
  let component: GestionDeRessourcesReseauxComponent;
  let fixture: ComponentFixture<GestionDeRessourcesReseauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDeRessourcesReseauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeRessourcesReseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
