import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  updateUserForm: FormGroup
  constructor(    private fb: FormBuilder, 
    private route:ActivatedRoute,
    private router:Router,
    private toastr: ToastrService,
    private usersService : UsersService) {

     let formControls = {

     login: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      id: new FormControl(''),
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

    this.updateUserForm = this.fb.group(formControls)
  }


  get login() { return this.updateUserForm.get('login') }
  get name() { return this.updateUserForm.get('name') }
  get lastname() { return this.updateUserForm.get('lastname') }
  get phone() { return this.updateUserForm.get('phone') }
  get email() { return this.updateUserForm.get('email') }
  get Role() { return this.updateUserForm.get('Role') }
  get password() { return this.updateUserForm.get('password') }
  get adress() { return this.updateUserForm.get('adress') }
  get id() { return this.updateUserForm.get('id') }


  ngOnInit(): void {
    let idstudent = this.route.snapshot.params.id;
    
    this.usersService.getOneUser(idstudent).subscribe(
      res=>{
        let student = res;
        console.log('student:', student);
        this.updateUserForm.patchValue({
          name : student.name,
          lastname : student.lastname ,
          login : student.login,
          adress : student.adress,
          password : student.name,
          email : student.email,
          Role : student.Role,
          phone : student.phone,
          id : student.id
        })
        
      },
      err=>{
        console.log(err);
      }
    )

  }
 
  updateUser() {
    let data = this.updateUserForm.value;
    let idUser = this.route.snapshot.params.id;
    //const user = new Students(data.name, data.lastname, data.phone, data.login, data.adress, data.Role, data.password, idUser);
    
    //console.log("UPDATING USER :id" + idUser + " \n USER : " + JSON.stringify(user));

    this.usersService.updateStudent(this.updateUserForm.value).subscribe(
      res=>{
        console.log("SERVER RESPONSE IS : " + JSON.stringify(res));
        //this.toastr.warning(res.result);
        this.router.navigate(['/student']);
      },
      err=>{
        console.error("RESPONSE ERROR :" + JSON.stringify(err));
      }
    )

  }

}

