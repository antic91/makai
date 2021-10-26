import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBottomComponent } from './details-bottom.component';

describe('DetailsBottomComponent', () => {
  let component: DetailsBottomComponent;
  let fixture: ComponentFixture<DetailsBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
