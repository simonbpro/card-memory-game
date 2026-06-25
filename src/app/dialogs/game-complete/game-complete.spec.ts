import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComplete } from './game-complete';

describe('GameComplete', () => {
  let component: GameComplete;
  let fixture: ComponentFixture<GameComplete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameComplete],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComplete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
