import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPhotoComponent } from './last-photo.component';

describe('LastPhotoComponent', () => {
  let component: LastPhotoComponent;
  let fixture: ComponentFixture<LastPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
