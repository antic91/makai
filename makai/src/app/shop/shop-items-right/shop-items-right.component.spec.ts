import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemsRightComponent } from './shop-items-right.component';

describe('ShopItemsRightComponent', () => {
  let component: ShopItemsRightComponent;
  let fixture: ComponentFixture<ShopItemsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopItemsRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
