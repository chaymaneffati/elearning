import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationsService} from '../../services/formations.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-edit-formations',
  templateUrl: './edit-formations.component.html',
  styleUrls: ['./edit-formations.component.css']
})
export class EditFormationsComponent implements OnInit {

  categories =[];
  updateFormationForm: FormGroup
  constructor(
    private categoriesService : CategoriesService ,
    private fb: FormBuilder, 
    private route:ActivatedRoute,
    private router:Router,
    private toastr: ToastrService,
    private formationsservice : FormationsService) {

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
      id_categorie: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      id: new FormControl(''),
    }

    this.updateFormationForm = this.fb.group(formControls)
  }

  get titre() { return this.updateFormationForm.get('titre') }
  get description() { return this.updateFormationForm.get('description') }
  get date() { return this.updateFormationForm.get('date') }
  get duree() { return this.updateFormationForm.get('duree') }v
  get id_categorie() { return this.updateFormationForm.get('id_categorie') }
  get id() { return this.updateFormationForm.get('id') }


  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(
      res=>{
        this.categories = res;
        console.log(this.categories);
      }
    );
    let idformation = this.route.snapshot.params.id;
    console.log(idformation);
    this.formationsservice.getOneFormation(idformation).subscribe(
      res=>{
        let formation = res;
        console.log(res);
        this.updateFormationForm.patchValue({
          titre : formation.titre,
          description : formation.description,
          date : formation.date,
          duree : formation.duree,
          id_categorie : formation.id_categorie,
          id : formation.id
        })
        
      },
      err=>{
        console.log(err);
      }
    )
  }

  editFormation() {
    //let data = this.updateFormationForm.value;

    this.formationsservice.updateFormation(this.updateFormationForm.value).subscribe( 
      data => {
        console.log(this.updateFormationForm.value);
        this.router.navigate(['formations']);        
        this.toastr.success('Done');
      }
    )

  }

}
