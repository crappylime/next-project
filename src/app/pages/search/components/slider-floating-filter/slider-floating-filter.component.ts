import { Component } from '@angular/core';

import { IFloatingFilter, IFloatingFilterParams, SerializedNumberFilter } from 'ag-grid-community';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { FormControl } from '@angular/forms';

export interface SliderFloatingFilterChange {
  model: SerializedNumberFilter;
}

export interface SliderFloatingFilterParams
  extends IFloatingFilterParams<SerializedNumberFilter, SliderFloatingFilterChange> {
  value: number;
  maxValue: number;
}

@Component({
  selector: 'app-slider-floating-filter',
  templateUrl: './slider-floating-filter.component.html',
  styleUrls: ['./slider-floating-filter.component.scss']
})
export class SliderFloatingFilterComponent
  implements
    IFloatingFilter<SerializedNumberFilter, SliderFloatingFilterChange, SliderFloatingFilterParams>,
    AgFrameworkComponent<SliderFloatingFilterParams> {
  public maxValue: number;
  public filterControl = new FormControl(0);
  private params: SliderFloatingFilterParams;

  constructor() {
    this.filterControl.valueChanges.subscribe(value =>
      this.params.onFloatingFilterChanged({ model: this.buildModel(value) })
    );
  }

  agInit(params: SliderFloatingFilterParams): void {
    this.params = params;
    this.maxValue = this.params.maxValue;
  }

  onParentModelChanged(parentModel: SerializedNumberFilter): void {
    if (!parentModel) {
      this.filterControl.setValue(0);
    } else {
      this.filterControl.setValue(parentModel.filter);
    }
  }

  buildModel(value: number): SerializedNumberFilter {
    if (value === 0) {
      return null;
    }
    return {
      filterType: 'number',
      type: 'greaterThan',
      filter: value,
      filterTo: null
    };
  }
}
