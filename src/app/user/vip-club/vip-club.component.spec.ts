import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipClubComponent } from './vip-club.component';

describe('VipClubComponent', () => {
  let component: VipClubComponent;
  let fixture: ComponentFixture<VipClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
