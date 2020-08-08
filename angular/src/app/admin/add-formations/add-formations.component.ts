import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationsService} from '../../services/formations.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-add-formations',
  templateUrl: './add-formations.component.html',
  styleUrls: ['./add-formations.component.css']
})
export class AddFormationsComponent implements OnInit {

  categories =[];
  addFormationForm: FormGroup
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

    this.addFormationForm = this.fb.group(formControls)
  }

  get titre() { return this.addFormationForm.get('titre') }
  get description() { return this.addFormationForm.get('description') }
  get date() { return this.addFormationForm.get('date') }
  get duree() { return this.addFormationForm.get('duree') }v
  get id_categorie() { return this.addFormationForm.get('id_categorie') }
  get id() { return this.addFormationForm.get('id') }


  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(
      res=>{
        this.categories = res;
        console.log(this.categories);
      }
    );    
    
  }

  editFormation() {
    //let data = this.addFormationForm.value;

    this.formationsservice.addFormation(this.addFormationForm.value).subscribe( 
      data => {
        console.log(this.addFormationForm.value);
        this.router.navigate(['formations']);        
        this.toastr.success('Done');
      }
    )

  }


}
