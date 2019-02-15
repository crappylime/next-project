import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AgFrameworkComponent } from 'ag-grid-angular';
import { IFloatingFilter, IFloatingFilterParams, SerializedTextFilter } from 'ag-grid-community';
import { filter } from 'rxjs/operators';

export interface SelectFilterChange {
  model: SerializedTextFilter;
}

export interface SelectFilterParams extends IFloatingFilterParams<SerializedTextFilter, SelectFilterChange> {
  value: string;
  items: string[];
  isMultiple: boolean;
}

@Component({
  selector: 'app-select-filter',
  template: `
    <mat-form-field class="ag-floating-filter-body">
      <mat-select [formControl]="filterControl" [multiple]="isMultiple">
        <mat-option *ngFor="let item of items" [value]="item">{{ item }}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: []
})
export class SelectFilterComponent
  implements
    IFloatingFilter<SerializedTextFilter, SelectFilterChange, SelectFilterParams>,
    AgFrameworkComponent<SelectFilterParams> {
  public filterControl = new FormControl('');
  public items: string[];
  public isMultiple: boolean;
  private params: SelectFilterParams;

  constructor() {
    this.filterControl.valueChanges.pipe(filter(value => !!value)).subscribe(value => {
      this.params.onFloatingFilterChanged({ model: this.buildModel(value) });
    });
  }

  agInit(params: SelectFilterParams): void {
    this.params = params;
    this.items = this.params.items;
    this.isMultiple = this.params.isMultiple;
  }

  onParentModelChanged(parentModel: SerializedTextFilter): void {
    if (!parentModel) {
      this.filterControl.setValue('');
    }
  }

  buildModel(value: string): SerializedTextFilter {
    if (value === '') {
      return null;
    }
    return {
      filterType: 'text',
      type: 'equals',
      filter: value
    };
  }
}
