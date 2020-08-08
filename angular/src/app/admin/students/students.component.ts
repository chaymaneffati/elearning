import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { users } from 'src/app/users';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = [];
  id: any;
  _id: string;

  constructor(private studentssurvice : EtudiantService ,private toastr: ToastrService , private router:Router,) { }

  ngOnInit(): void {

    this.studentssurvice.getEtudiants().subscribe(
      res=>{
        this.students = res;
        console.log(this.students);
      }
    );
  }
  
  delete(student:users ):void{
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
    //console.log(student.id);
   this.studentssurvice.deleteEtudiant(this.newMethod(student)).subscribe(
     data =>{
       this.students = this.students.filter(u => u !== student);
       this.toastr.error('student deleted successfully.');
     }
    )
  }
  private newMethod(student: users): number {
    return student.id;
  }


}
