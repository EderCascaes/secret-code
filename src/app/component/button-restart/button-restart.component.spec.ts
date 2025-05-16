import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRestartComponent } from './button-restart.component';

describe('ButtonRestartComponent', () => {
  let component: ButtonRestartComponent;
  let fixture: ComponentFixture<ButtonRestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
