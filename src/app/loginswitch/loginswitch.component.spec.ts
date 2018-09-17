import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginswitchComponent } from './loginswitch.component';

describe('LoginswitchComponent', () => {
  let component: LoginswitchComponent;
  let fixture: ComponentFixture<LoginswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
