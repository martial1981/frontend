import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysnameComponent } from './sysname.component';

describe('SysnameComponent', () => {
  let component: SysnameComponent;
  let fixture: ComponentFixture<SysnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
