import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDesUtilisateursComponent } from './creation-des-utilisateurs.component';

describe('CreationDesUtilisateursComponent', () => {
  let component: CreationDesUtilisateursComponent;
  let fixture: ComponentFixture<CreationDesUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationDesUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDesUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
