import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourService} from '../../services/cour.service';
import { FormationsService } from '../../services/formations.service';

@Component({
  selector: 'app-edit-cours',
  templateUrl: './edit-cours.component.html',
  styleUrls: ['./edit-cours.component.css']
})
export class EditCoursComponent implements OnInit {

  formations =[];
  updateCourForm: FormGroup
  constructor(
    private formationsService : FormationsService ,
    private fb: FormBuilder, 
    private route:ActivatedRoute,
    private router:Router,
    private toastr: ToastrService,
    private courservice : CourService) {

     let formControls = {

     titre: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      description: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      date: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      duree: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      id_formation: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      id: new FormControl(''),
    }

    this.updateCourForm = this.fb.group(formControls)
  }

  get titre() { return this.updateCourForm.get('titre') }
  get date() { return this.updateCourForm.get('date') }
  get fichier() { return this.updateCourForm.get('date') }
  get duree() { return this.updateCourForm.get('duree') }v
  get id_formation() { return this.updateCourForm.get('id_formation') }
  get id() { return this.updateCourForm.get('id') }


  ngOnInit(): void {
    this.formationsService.getFormations().subscribe(
      res=>{
        this.formations = res;
        console.log(this.formations);
      }
    );



    let idcour = this.route.snapshot.params.id;
    console.log(idcour);
    this.courservice.getOneCour(idcour).subscribe(
      res=>{
        let cour = res;
        console.log(res);
        this.updateCourForm.patchValue({
          titre : cour.titre,
          date : cour.description,
          fichier : cour.date,
          id_formation : cour.id_formation,
          id_formateur : cour.id_formateur
        })
        
      },
      err=>{
        console.log(err);
      }
    )
  }

  editCour() {
    //let data = this.updateCourForm.value;

    this.courservice.updateCour(this.updateCourForm.value).subscribe( 
      data => {
        console.log(this.updateCourForm.value);
        this.router.navigate(['formations']);        
        this.toastr.success('Done');
      }
    )

  }

}
