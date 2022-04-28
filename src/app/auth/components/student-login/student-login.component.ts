import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  errorMsg : boolean =false;

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.adminService.getAdminPassword(f.value.username, f.value.password).subscribe(response => {
      console.log(response)
      if(response != null){
        this.errorMsg=false
        this.router.navigateByUrl("/student-login")

      }
      else{
        this.errorMsg=true
      }
    })
  }

}
