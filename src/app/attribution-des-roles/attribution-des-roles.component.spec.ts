import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionDesRolesComponent } from './attribution-des-roles.component';

describe('AttributionDesRolesComponent', () => {
  let component: AttributionDesRolesComponent;
  let fixture: ComponentFixture<AttributionDesRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributionDesRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributionDesRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
