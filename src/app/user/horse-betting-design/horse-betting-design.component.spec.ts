import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseBettingDesignComponent } from './horse-betting-design.component';

describe('HorseBettingDesignComponent', () => {
  let component: HorseBettingDesignComponent;
  let fixture: ComponentFixture<HorseBettingDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseBettingDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseBettingDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
