import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './employees/edit/edit.component';
import{EmployeesComponent} from './employees/employees.component'
import{HeaderComponent} from './header/header.component'

const routes: Routes = [
  {
    path:"",
    component: EmployeesComponent,
  },
  {
    path:"employees/add/:id",
    component:EditComponent,
  },
  {
    path:"employees/edit/:id",
    component:EditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
