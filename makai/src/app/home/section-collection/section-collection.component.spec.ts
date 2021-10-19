import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCollectionComponent } from './section-collection.component';

describe('SectionCollectionComponent', () => {
  let component: SectionCollectionComponent;
  let fixture: ComponentFixture<SectionCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
