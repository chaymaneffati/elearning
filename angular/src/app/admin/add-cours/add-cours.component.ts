import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourService} from '../../services/cour.service';
import { FormationsService } from '../../services/formations.service';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {

  formations =[];
  addCourForm: FormGroup
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
      id_formateur: new FormControl(''),
    }

    this.addCourForm = this.fb.group(formControls)
  }

  get titre() { return this.addCourForm.get('titre') }
  get date() { return this.addCourForm.get('date') }
  get fichier() { return this.addCourForm.get('date') }
  get duree() { return this.addCourForm.get('duree') } 
  get id_formation() { return this.addCourForm.get('id_formation') }
  get id_formateur() { return this.addCourForm.get('id_formateur') }


  ngOnInit(): void {
    this.formationsService.getFormations().subscribe(
      res=>{
        this.formations = res;
        console.log(this.formations);
      }
    );
  }

  addCour() {
    //let data = this.addCourForm.value;

    this.courservice.addCour(this.addCourForm.value).subscribe( 
      data => {
        console.log(this.addCourForm.value);
        this.router.navigate(['formations']);        
        this.toastr.success('Done');
      }
    )

  }

}
