import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationDesTicketsComponent } from './consultation-des-tickets.component';

describe('ConsultationDesTicketsComponent', () => {
  let component: ConsultationDesTicketsComponent;
  let fixture: ComponentFixture<ConsultationDesTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationDesTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationDesTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
