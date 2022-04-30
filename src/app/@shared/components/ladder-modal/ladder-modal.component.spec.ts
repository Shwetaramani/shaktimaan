import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadderModalComponent } from './ladder-modal.component';

describe('LadderModalComponent', () => {
  let component: LadderModalComponent;
  let fixture: ComponentFixture<LadderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadderModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
