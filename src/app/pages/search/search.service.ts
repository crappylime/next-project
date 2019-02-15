import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from './employee';

const routes = {
  employees: () => `/employees.json?key=e1d2e8e0`
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee[] | string> {
    return this.httpClient
      .cache()
      .get<Employee[]>(routes.employees())
      .pipe(catchError(() => of('Error, could not load employees :-(')));
  }
}
