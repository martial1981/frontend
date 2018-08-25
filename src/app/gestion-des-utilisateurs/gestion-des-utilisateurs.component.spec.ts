import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesUtilisateursComponent } from './gestion-des-utilisateurs.component';

describe('GestionDesUtilisateursComponent', () => {
  let component: GestionDesUtilisateursComponent;
  let fixture: ComponentFixture<GestionDesUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
