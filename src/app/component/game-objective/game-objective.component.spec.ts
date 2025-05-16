import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameObjectiveComponent } from './game-objective.component';

describe('GameObjectiveComponent', () => {
  let component: GameObjectiveComponent;
  let fixture: ComponentFixture<GameObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
