import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyCliComponent } from './any-cli.component';

describe('AnyCliComponent', () => {
  let component: AnyCliComponent;
  let fixture: ComponentFixture<AnyCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
