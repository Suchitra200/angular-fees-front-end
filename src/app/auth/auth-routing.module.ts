import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantComponent } from './components/accountant/accountant.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AdminComponent } from './components/admin/admin.component';
import { DueFeesComponent } from './components/due-fees/due-fees.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AccountantHomeComponent } from './components/accountant-home/accountant-home.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { LoginComponent } from './components/login/login.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { AddAccountantComponent } from './components/add-accountant/add-accountant.component';
import { ViewAccountantComponent } from './components/view-accountant/view-accountant.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { EditAccountantComponent } from './components/edit-accountant/edit-accountant.component';
import { DeleteAccountantComponent } from './components/delete-accountant/delete-accountant.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import{ AddTeacherComponent} from './components/add-teacher/add-teacher.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'accountant', component: AccountantComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'add-teacher', component: AddTeacherComponent },


  { path: 'accountant-home', component: AccountantHomeComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'add-accountant', component: AddAccountantComponent },
  { path: 'view-student', component: ViewStudentComponent },
  { path: 'view-accountant', component: ViewAccountantComponent },
  { path: 'due-fees', component: DueFeesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'log-out', component: LogOutComponent },
  { path: 'edit-student', component: EditStudentComponent },
  { path: 'search-student', component: SearchStudentComponent },
  { path: 'delete-student', component: DeleteStudentComponent },
  { path: 'edit-accountant', component: EditAccountantComponent },
  { path: 'delete-accountant', component: DeleteAccountantComponent },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'student-dashboard/:data', component: StudentDashboardComponent },
  { path: 'teacher-dashboard', component: TeacherComponent },
  { path: 'teacher-login', component: TeacherLoginComponent },
  { path: 'order', component: CreateOrderComponent },
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
