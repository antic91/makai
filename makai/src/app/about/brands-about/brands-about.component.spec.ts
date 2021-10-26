import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsAboutComponent } from './brands-about.component';

describe('BrandsAboutComponent', () => {
  let component: BrandsAboutComponent;
  let fixture: ComponentFixture<BrandsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
