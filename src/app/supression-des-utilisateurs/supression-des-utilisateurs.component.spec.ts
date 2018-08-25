import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupressionDesUtilisateursComponent } from './supression-des-utilisateurs.component';

describe('SupressionDesUtilisateursComponent', () => {
  let component: SupressionDesUtilisateursComponent;
  let fixture: ComponentFixture<SupressionDesUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupressionDesUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupressionDesUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
