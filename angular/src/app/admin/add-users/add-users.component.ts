import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users.service';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addUserForm: FormGroup
  constructor(    private fb: FormBuilder, 
    private router:Router,
    private toastr: ToastrService,
    private usersservice : UsersService) {

     let formControls = {

     login: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      name: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      phone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z0-9@ .'-]+"),
        Validators.minLength(2)
      ]),
      Role: new FormControl('',[
        Validators.required
      
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      adress: new FormControl('',[
        Validators.required,
        
      ])
    }

    this.addUserForm = this.fb.group(formControls)
  }

  get login() { return this.addUserForm.get('login') }
  get name() { return this.addUserForm.get('name') }
  get lastname() { return this.addUserForm.get('lastname') }
  get phone() { return this.addUserForm.get('phone') }
  get email() { return this.addUserForm.get('email') }
  get Role() { return this.addUserForm.get('Role') }
  get password() { return this.addUserForm.get('password') }
  get adress() { return this.addUserForm.get('adress') }


  ngOnInit(): void {
  }

  addUser() {
    //let data = this.addUserForm.value;

    this.usersservice.addStudent(this.addUserForm.value).subscribe( 
      data => {
        this.router.navigate(['formateurs']);
        this.toastr.success('Done');
      }
    )

  }
 /* addUser() {
    //let data = this.addUserForm.value;
    alert(JSON.stringify( this.addUserForm.value));
    /*this.studentssurvice.addStudent(this.addUserForm.value).pipe( 
      map(res:Res) => {
        alert("response is : " + data);
        //this.router.navigate(['viewuser']);
        //this.toastr.success('Done');
      }
    )

  }*/

}
