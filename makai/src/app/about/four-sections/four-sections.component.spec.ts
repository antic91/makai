import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourSectionsComponent } from './four-sections.component';

describe('FourSectionsComponent', () => {
  let component: FourSectionsComponent;
  let fixture: ComponentFixture<FourSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
