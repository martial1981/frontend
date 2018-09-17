import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesscaseComponent } from './businesscase.component';

describe('BusinesscaseComponent', () => {
  let component: BusinesscaseComponent;
  let fixture: ComponentFixture<BusinesscaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesscaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesscaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
