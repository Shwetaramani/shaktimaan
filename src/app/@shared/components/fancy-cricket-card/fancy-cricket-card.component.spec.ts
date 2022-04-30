import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyCricketCardComponent } from './fancy-cricket-card.component';

describe('FancyCricketCardComponent', () => {
  let component: FancyCricketCardComponent;
  let fixture: ComponentFixture<FancyCricketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyCricketCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyCricketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
