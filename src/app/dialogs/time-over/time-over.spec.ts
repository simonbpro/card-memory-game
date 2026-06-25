import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOver } from './time-over';

describe('TimeOver', () => {
  let component: TimeOver;
  let fixture: ComponentFixture<TimeOver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeOver],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeOver);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
