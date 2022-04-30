import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBetsComponent } from './fancy-bets.component';

describe('FancyBetsComponent', () => {
  let component: FancyBetsComponent;
  let fixture: ComponentFixture<FancyBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyBetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
