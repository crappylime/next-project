import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { SearchService } from '../../search.service';
import { Observable } from 'rxjs';

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

  private gridApi: any;
  private gridColumnApi: any;

  constructor(private searchService: SearchService) {
    this.columnDefs = [
      { headerName: 'First Name', field: 'firstName', width: 130, filter: 'agTextColumnFilter' },
      { headerName: 'Last Name', field: 'lastName', width: 130, filter: 'agTextColumnFilter' },
      { headerName: 'Role', field: 'role' },
      { headerName: 'Grade', field: 'grade', width: 110 },
      { headerName: 'Skills', field: 'skills', filter: 'agTextColumnFilter' },
      { headerName: 'Languages', field: 'languages', width: 150 },
      { headerName: 'On Bench', field: 'onBench', width: 125 },
      { headerName: 'Availability', field: 'availability', width: 140 },
      { headerName: 'Mobility', field: 'mobility', width: 130 },
      { headerName: 'Employment', field: 'employmentType', width: 140 }
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
