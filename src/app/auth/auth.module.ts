import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AccountantComponent } from './components/accountant/accountant.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AccountantHomeComponent } from './components/accountant-home/accountant-home.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { DueFeesComponent } from './components/due-fees/due-fees.component';
import { LoginComponent } from './components/login/login.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { AddAccountantComponent } from './components/add-accountant/add-accountant.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAccountantComponent } from './components/view-accountant/view-accountant.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
//import { EditAccountantComponent } from './components/edit-accountant/edit-accountant.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { EditAccountantComponent } from './components/edit-accountant/edit-accountant.component';
import { DeleteAccountantComponent } from './components/delete-accountant/delete-accountant.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';

@NgModule({
  declarations: [
    AdminComponent,
    AccountantComponent,
    AdminHomeComponent,
    AccountantHomeComponent,
    AddStudentComponent,
    AddAccountantComponent,
    ViewStudentComponent,
    ViewAccountantComponent,
    DueFeesComponent,
    LoginComponent,
    LogOutComponent,
    HomeComponent,
    EditStudentComponent,
    SearchStudentComponent,
    DeleteStudentComponent,
    EditAccountantComponent,
    DeleteAccountantComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    PaypalComponent,
    StudentDashboardComponent,
    TeacherComponent,
    AddTeacherComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    DataTablesModule,
    HttpClientModule,

  ],
  exports:[
    AdminComponent,
    AccountantComponent,

  ]
})
export class AuthModule { }
