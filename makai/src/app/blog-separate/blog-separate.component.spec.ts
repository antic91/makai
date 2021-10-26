import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSeparateComponent } from './blog-separate.component';

describe('BlogSeparateComponent', () => {
  let component: BlogSeparateComponent;
  let fixture: ComponentFixture<BlogSeparateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSeparateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSeparateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
