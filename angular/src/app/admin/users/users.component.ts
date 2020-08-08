import { Router } from '@angular/router';
import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/users';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  id: any;
  _id: string;

  constructor(private usersservices : UsersService ,
    private toastr: ToastrService , private router:Router,) { }

  ngOnInit(): void {

    this.usersservices.getStudents().subscribe(
      res=>{
        this.users = res;
        console.log(this.users);
      }
    );
  }
  
  delete(users:users ):void{
    let index = this.users.indexOf(users);
    this.users.splice(index, 1);
    //console.log(student.id);
   this.usersservices.deleteStudent(this.newMethod(users)).subscribe(
     data =>{
       this.users = this.users.filter(u => u !== users);
       this.toastr.error('user deleted successfully.');
     }
    )
  }
  private newMethod(users: users): number {
    return users.id;
  }


}