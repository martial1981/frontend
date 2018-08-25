import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDesTicketsComponent } from './creation-des-tickets.component';

describe('CreationDesTicketsComponent', () => {
  let component: CreationDesTicketsComponent;
  let fixture: ComponentFixture<CreationDesTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationDesTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDesTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
