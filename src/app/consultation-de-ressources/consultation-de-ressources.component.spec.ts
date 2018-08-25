import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationDeRessourcesComponent } from './consultation-de-ressources.component';

describe('ConsultationDeRessourcesComponent', () => {
  let component: ConsultationDeRessourcesComponent;
  let fixture: ComponentFixture<ConsultationDeRessourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationDeRessourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationDeRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
