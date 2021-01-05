import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Employee One',
      email: 'EmployeeOne@Mailinator.com',
      phone: 1234,
    },
    {
      id: 2,
      name: 'Employee Two',
      email: 'EmployeeTwo@Mailinator.com',
      phone: 2345,
    },
  ];

  constructor() {}

  onGet() {
    return this.employees;
  }

  onAdd(employee: Employee) {
    this.employees.push(employee);
  }
}
