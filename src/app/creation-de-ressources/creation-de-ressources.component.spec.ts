import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDeRessourcesComponent } from './creation-de-ressources.component';

describe('CreationDeRessourcesComponent', () => {
  let component: CreationDeRessourcesComponent;
  let fixture: ComponentFixture<CreationDeRessourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationDeRessourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDeRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
