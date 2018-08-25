import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardAdminComponent } from './dasboard-admin.component';

describe('DasboardAdminComponent', () => {
  let component: DasboardAdminComponent;
  let fixture: ComponentFixture<DasboardAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
