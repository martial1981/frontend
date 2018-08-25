import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationDesTicketsComponent } from './modification-des-tickets.component';

describe('ModificationDesTicketsComponent', () => {
  let component: ModificationDesTicketsComponent;
  let fixture: ComponentFixture<ModificationDesTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationDesTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationDesTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
