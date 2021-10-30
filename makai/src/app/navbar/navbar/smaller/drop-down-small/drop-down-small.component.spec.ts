import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownSmallComponent } from './drop-down-small.component';

describe('DropDownSmallComponent', () => {
  let component: DropDownSmallComponent;
  let fixture: ComponentFixture<DropDownSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
