import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComponent1 } from './shop-one.component';

describe('ShopComponent1', () => {
  let component: ShopComponent1;
  let fixture: ComponentFixture<ShopComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopComponent1 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
