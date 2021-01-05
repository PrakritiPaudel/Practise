import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Maria Anders',
      email: 'maria.anders@mailinator.com',
      phone: 2344567531,
    },
    {
      id: 2,
      name: 'Francisco Chang',
      email: 'francisco.chang@mailinator.com',
      phone: 7689764502,
    },
    {
      id: 3,
      name: 'Roland Mendel',
      email: 'roland.mendel@mailinator.com',
      phone: 9856530827,
    },
    {
      id: 4,
      name: 'Helen Bennett',
      email: 'helen.bennett@mailinator.com',
      phone: 3246764953,
    },
  ];

  constructor() {
    this.employees =
      sessionStorage.length > 0
        ? JSON.parse(sessionStorage.getItem('Employees'))
        : this.employees;
  }

  onGet() {
    return this.employees;
  }

  onAdd(employee: Employee) {
    this.employees.push(employee);
    sessionStorage.setItem('Employees', JSON.stringify(this.employees));
  }

  onDelete(employee: Employee) {
    // Find the index of the item to be removed
    const indexOfItem = this.employees.findIndex((e) => e.id === employee.id);
    if (indexOfItem > -1) {
      this.employees.splice(indexOfItem, 1);
    }

    // Stringify and Save to session storage
    sessionStorage.setItem('Employees', JSON.stringify(this.employees));
  }
}
