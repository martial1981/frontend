import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifictaionDesUtilisateurEtDesRolesComponent } from './modifictaion-des-utilisateur-et-des-roles.component';

describe('ModifictaionDesUtilisateurEtDesRolesComponent', () => {
  let component: ModifictaionDesUtilisateurEtDesRolesComponent;
  let fixture: ComponentFixture<ModifictaionDesUtilisateurEtDesRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifictaionDesUtilisateurEtDesRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifictaionDesUtilisateurEtDesRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
