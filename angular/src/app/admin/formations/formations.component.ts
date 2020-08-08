import { FormationsService } from './../../services/formations.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  Formations = [];

  constructor(private formationsService : FormationsService ,
    private toastr: ToastrService , private router:Router)
  { }

   ngOnInit(): void {

    this.formationsService.getFormations().subscribe(
      res=>{
        this.Formations = res;
        console.log(this.Formations);
      }
    );
  }
  deleteFormation(id){
    console.log(id);
    this.formationsService.deleteFormation(id).subscribe(
      res=>{
        console.log(res);
      }
    );
  }


}
