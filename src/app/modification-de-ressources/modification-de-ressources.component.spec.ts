import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationDeRessourcesComponent } from './modification-de-ressources.component';

describe('ModificationDeRessourcesComponent', () => {
  let component: ModificationDeRessourcesComponent;
  let fixture: ComponentFixture<ModificationDeRessourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationDeRessourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationDeRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
