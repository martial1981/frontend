import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotureDesTicketsComponent } from './cloture-des-tickets.component';

describe('ClotureDesTicketsComponent', () => {
  let component: ClotureDesTicketsComponent;
  let fixture: ComponentFixture<ClotureDesTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClotureDesTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClotureDesTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
