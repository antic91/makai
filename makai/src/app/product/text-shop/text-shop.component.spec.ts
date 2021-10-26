import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextShopComponent } from './text-shop.component';

describe('TextShopComponent', () => {
  let component: TextShopComponent;
  let fixture: ComponentFixture<TextShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
