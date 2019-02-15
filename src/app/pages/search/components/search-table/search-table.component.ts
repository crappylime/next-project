import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Employee } from '../../employee';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent implements OnInit, AfterViewInit {
  public displayedColumns = [
    'firstName',
    'lastName',
    'role',
    'grade',
    'skills',
    'languages',
    'onBench',
    'availability',
    'mobility',
    'employmentType'
  ];
  public dataSource = new MatTableDataSource<Employee>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.getAllEmployees();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllEmployees = () => {
    this.searchService.getEmployees().subscribe(res => {
      this.dataSource.data = res as Employee[];
    });
  };

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };
}
