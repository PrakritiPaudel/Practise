import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  employeesFromLocalStorage: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.onGet();

    this.employees =
      sessionStorage.length > 0
        ? JSON.parse(sessionStorage.getItem('Employees'))
        : this.employees;
  }

  deleteEmployee(employee): void {
    return this.employeeService.onDelete(employee);
  }
}
