import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayScoreModalComponent } from './lay-score-modal.component';

describe('LayScoreModalComponent', () => {
  let component: LayScoreModalComponent;
  let fixture: ComponentFixture<LayScoreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayScoreModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayScoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
