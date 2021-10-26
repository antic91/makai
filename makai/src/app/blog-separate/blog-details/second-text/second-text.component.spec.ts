import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTextComponent } from './second-text.component';

describe('SecondTextComponent', () => {
  let component: SecondTextComponent;
  let fixture: ComponentFixture<SecondTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
