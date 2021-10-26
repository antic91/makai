import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPhotosComponent } from './group-photos.component';

describe('GroupPhotosComponent', () => {
  let component: GroupPhotosComponent;
  let fixture: ComponentFixture<GroupPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
