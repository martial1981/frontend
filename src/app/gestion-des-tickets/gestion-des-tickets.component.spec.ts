import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesTicketsComponent } from './gestion-des-tickets.component';

describe('GestionDesTicketsComponent', () => {
  let component: GestionDesTicketsComponent;
  let fixture: ComponentFixture<GestionDesTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
