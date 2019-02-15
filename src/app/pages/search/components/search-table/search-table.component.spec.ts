import { SearchService } from './../../search.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTableComponent } from './search-table.component';
import { MaterialModule } from '@app/material.module';
import { mockEmployees } from '../../search.service.spec';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('SearchTableComponent', () => {
  let component: SearchTableComponent;
  let fixture: ComponentFixture<SearchTableComponent>;

  const searchService = {
    getEmployees: () => {
      return of(mockEmployees);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, FlexLayoutModule, MaterialModule],
      declarations: [SearchTableComponent],
      providers: [{ provide: SearchService, useValue: searchService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
