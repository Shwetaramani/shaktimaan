import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneClickBetModalComponent } from './one-click-bet-modal.component';

describe('OneClickBetModalComponent', () => {
  let component: OneClickBetModalComponent;
  let fixture: ComponentFixture<OneClickBetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneClickBetModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneClickBetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
