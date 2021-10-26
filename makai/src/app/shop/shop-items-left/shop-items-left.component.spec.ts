import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemsLeftComponent } from './shop-items-left.component';

describe('ShopItemsLeftComponent', () => {
  let component: ShopItemsLeftComponent;
  let fixture: ComponentFixture<ShopItemsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopItemsLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
