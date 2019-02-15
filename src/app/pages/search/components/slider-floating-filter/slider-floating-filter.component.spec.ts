import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFloatingFilterComponent } from './slider-floating-filter.component';

describe('SliderFloatingFilterComponent', () => {
  let component: SliderFloatingFilterComponent;
  let fixture: ComponentFixture<SliderFloatingFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderFloatingFilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFloatingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
