import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users : User[];
  constructor(public authservice: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(email, password) {
    this.authservice.getUsers().subscribe(
      res=>{
        this.users = res;
        console.log(this.users);
      }
    );
    this.users.forEach(x => {
      //console.log(x.email);
      if((x.email == email) && (x.password == password))
      {
        localStorage.setItem('currentuser', JSON.stringify(x));
        this.router.navigate(['home']);
      }
         
      }); 
  }

}
