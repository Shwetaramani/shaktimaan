import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptopayComponent } from './cryptopay.component';

describe('CryptopayComponent', () => {
  let component: CryptopayComponent;
  let fixture: ComponentFixture<CryptopayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptopayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptopayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
