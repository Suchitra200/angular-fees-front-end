import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  errorMsg : boolean =false;

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.adminService.getAdminPassword(f.value.username, f.value.password).subscribe(response => {
      console.log(response)
      if(response != null){
        this.errorMsg=false
        this.router.navigateByUrl("/teacher-login")

      }
      else{
        this.errorMsg=true
      }
    })
  }

}
