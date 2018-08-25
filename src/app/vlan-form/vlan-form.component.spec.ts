import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlanFormComponent } from './vlan-form.component';

describe('VlanFormComponent', () => {
  let component: VlanFormComponent;
  let fixture: ComponentFixture<VlanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
