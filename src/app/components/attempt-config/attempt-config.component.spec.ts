import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptConfigComponent } from './attempt-config.component';

describe('AttemptConfigComponent', () => {
  let component: AttemptConfigComponent;
  let fixture: ComponentFixture<AttemptConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttemptConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
