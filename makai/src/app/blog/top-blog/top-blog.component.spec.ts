import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBlogComponent } from './top-blog.component';

describe('TopBlogComponent', () => {
  let component: TopBlogComponent;
  let fixture: ComponentFixture<TopBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
