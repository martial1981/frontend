import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationDesUtilisateursComponent } from './consultation-des-utilisateurs.component';

describe('ConsultationDesUtilisateursComponent', () => {
  let component: ConsultationDesUtilisateursComponent;
  let fixture: ComponentFixture<ConsultationDesUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationDesUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationDesUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
