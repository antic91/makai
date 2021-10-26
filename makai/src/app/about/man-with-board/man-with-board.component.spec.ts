import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManWithBoardComponent } from './man-with-board.component';

describe('ManWithBoardComponent', () => {
  let component: ManWithBoardComponent;
  let fixture: ComponentFixture<ManWithBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManWithBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManWithBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
