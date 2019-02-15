import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../employee';
import { SearchService } from '../../search.service';
import { SelectFilterComponent } from '../select-filter/select-filter.component';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent {
  rowData: Observable<Employee[] | string>;
  columnDefs: any;
  defaultColDef: any;
  paginationPageSize: any;
  paginationNumberFormatter: any;
  frameworkComponents: any;

  private gridApi: any;
  private gridColumnApi: any;

  constructor(private searchService: SearchService) {
    this.columnDefs = [
      { headerName: 'First Name', field: 'firstName', width: 130, filter: 'agTextColumnFilter' },
      { headerName: 'Last Name', field: 'lastName', width: 130, filter: 'agTextColumnFilter' },
      { headerName: 'Role', field: 'role', filter: 'agTextColumnFilter' },
      { headerName: 'Grade', field: 'grade', width: 110 },
      { headerName: 'Skills', field: 'skills', filter: 'agTextColumnFilter' },
      { headerName: 'Languages', field: 'languages', width: 150 },
      {
        headerName: 'On Bench',
        field: 'onBench',
        width: 125,
        floatingFilterComponent: 'floatingFilterComponent',
        floatingFilterComponentParams: {
          items: ['true', 'false'],
          suppressFilterButton: true
        },
        filter: 'agTextColumnFilter',
        suppressMenu: false
      },
      { headerName: 'Availability', field: 'availability', width: 140, filter: 'agTextColumnFilter' },
      { headerName: 'Mobility', field: 'mobility', width: 130 },
      {
        headerName: 'Employment',
        field: 'employmentType',
        width: 140,
        floatingFilterComponent: 'floatingFilterComponent',
        floatingFilterComponentParams: {
          items: ['full-time', 'part-time'],
          suppressFilterButton: true
        },
        filter: 'agTextColumnFilter',
        suppressMenu: false
      }
    ];

    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true
    };

    this.paginationPageSize = 5;
    this.paginationNumberFormatter = function(params: any) {
      return '[' + params.value.toLocaleString() + ']';
    };
    this.frameworkComponents = { floatingFilterComponent: SelectFilterComponent };
  }

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.getElementById('page-size')).value;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.rowData = this.searchService.getEmployees();
  }

  clearFilters() {
    this.gridApi.setFilterModel(null);
    this.gridApi.onFilterChanged();
  }
}
