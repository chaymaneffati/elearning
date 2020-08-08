import { CourService } from './../../services/cour.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  Cours = [];

  constructor(private coursService : CourService ,
    private toastr: ToastrService , private router:Router)
  { }

   ngOnInit(): void {

    this.coursService.getCour().subscribe(
      res=>{
        this.Cours = res;
        console.log(this.Cours);
      }
    );
  }
  deleteCour(id){
    console.log(id);
    this.coursService.deleteCour(id).subscribe(
      res=>{
        console.log(res);
      }
    );
  }

}
