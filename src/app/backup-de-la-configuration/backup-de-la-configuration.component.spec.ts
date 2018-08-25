import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupDeLaConfigurationComponent } from './backup-de-la-configuration.component';

describe('BackupDeLaConfigurationComponent', () => {
  let component: BackupDeLaConfigurationComponent;
  let fixture: ComponentFixture<BackupDeLaConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupDeLaConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupDeLaConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
