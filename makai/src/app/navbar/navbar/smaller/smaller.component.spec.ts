import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallerComponent } from './smaller.component';

describe('SmallerComponent', () => {
  let component: SmallerComponent;
  let fixture: ComponentFixture<SmallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
