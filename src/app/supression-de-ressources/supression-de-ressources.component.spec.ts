import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupressionDeRessourcesComponent } from './supression-de-ressources.component';

describe('SupressionDeRessourcesComponent', () => {
  let component: SupressionDeRessourcesComponent;
  let fixture: ComponentFixture<SupressionDeRessourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupressionDeRessourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupressionDeRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
