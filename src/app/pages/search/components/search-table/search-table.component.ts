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
  frameworkComponents: any;
  quickFilterText: any;
  rowSelection: any;
  currentEmployee: Employee;
  isOpen = false;

  private gridApi: any;
  private gridColumnApi: any;

  constructor(private searchService: SearchService) {
    this.columnDefs = [
      { headerName: 'First Name', field: 'firstName', width: 130, filter: 'agTextColumnFilter' },
      { headerName: 'Last Name', field: 'lastName', width: 130, filter: 'agTextColumnFilter' },
      { headerName: 'Role', field: 'role', filter: 'agTextColumnFilter' },
      {
        headerName: 'Grade',
        field: 'grade',
        width: 110,
        floatingFilterComponent: 'selectFilterComponent',
        floatingFilterComponentParams: {
          items: ['A1', 'A2', 'B', 'C', 'D', 'E'],
          isMultiple: false,
          suppressFilterButton: true
        },
        suppressMenu: true
      },
      { headerName: 'Skills', field: 'skills', filter: 'agTextColumnFilter' },
      {
        headerName: 'Languages',
        field: 'languages',
        width: 150,
        floatingFilterComponent: 'selectFilterComponent',
        floatingFilterComponentParams: {
          items: ['English', 'German'],
          isMultiple: true,
          suppressFilterButton: true
        },
        suppressMenu: true
      },
      {
        headerName: 'On Bench',
        field: 'onBench',
        width: 125,
        floatingFilterComponent: 'selectFilterComponent',
        floatingFilterComponentParams: {
          items: ['true', 'false'],
          isMultiple: false,
          suppressFilterButton: true
        },
        suppressMenu: true
      },
      { headerName: 'Availability', field: 'availability', width: 140, filter: 'agTextColumnFilter' },
      {
        headerName: 'Mobility',
        field: 'mobility',
        width: 130,
        floatingFilterComponent: 'selectFilterComponent',
        floatingFilterComponentParams: {
          items: ['No', 'Part of week', 'Weekly', 'Monthly', '6-12 Months', 'Relocation'],
          isMultiple: false,
          suppressFilterButton: true
        },
        suppressMenu: true
      },
      {
        headerName: 'Employment',
        field: 'employmentType',
        width: 140,
        floatingFilterComponent: 'selectFilterComponent',
        floatingFilterComponentParams: {
          items: ['full-time', 'part-time'],
          isMultiple: false,
          suppressFilterButton: true
        },
        suppressMenu: true
      }
    ];

    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true
    };

    this.paginationPageSize = 10;
    this.frameworkComponents = { selectFilterComponent: SelectFilterComponent };
    this.rowSelection = 'single';
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

  applyFilter(value: string) {
    this.quickFilterText = value;
  }

  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    this.currentEmployee = selectedRows[0];
    if (this.currentEmployee) {
      this.isOpen = true;
    }
  }

  close() {
    this.isOpen = false;
    this.gridApi.deselectAll();
  }
}
