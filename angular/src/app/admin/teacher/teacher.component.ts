import { Component, OnInit } from '@angular/core';
import {FormateurService } from 'src/app/services/formateur.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { users } from 'src/app/users';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  Users = [];
  id: any;
  _id: string;

  constructor(private usersService : FormateurService ,private toastr: ToastrService , private router:Router,) { }

  ngOnInit(): void {

    this.usersService.getFormateurs().subscribe(
      res=>{
        this.Users = res;
        console.log(this.Users);
      }
    );
  }
  
  delete(users:users ):void{
    let index = this.Users.indexOf(users);
    this.Users.splice(index, 1);
    //console.log(student.id);
   this.usersService.deleteFormateur(this.newMethod(users)).subscribe(
     data =>{
       this.Users = this.Users.filter(u => u !== users);
       this.toastr.error('user deleted successfully.');
     }
    )
  }
  private newMethod(users: users): number {
    return users.id;
  }


}

