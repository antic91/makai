import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTextComponent } from './bottom-text.component';

describe('BottomTextComponent', () => {
  let component: BottomTextComponent;
  let fixture: ComponentFixture<BottomTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
