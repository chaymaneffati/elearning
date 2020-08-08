import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {

  updateCategorieForm: FormGroup
  constructor(
    private fb: FormBuilder, 
    private route:ActivatedRoute,
    private router:Router,
    private toastr: ToastrService,
    private categoriesservice : CategoriesService) {

     let formControls = {

     titre: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      id: new FormControl(''),
    }

    this.updateCategorieForm = this.fb.group(formControls)
  }

  get titre() { return this.updateCategorieForm.get('titre') }
  get id() { return this.updateCategorieForm.get('id') }


  ngOnInit(): void {
    let idcategorie = this.route.snapshot.params.id;
    console.log(idcategorie);
    this.categoriesservice.getOneCategorie(idcategorie).subscribe(
      res=>{
        let categorie = res;
        console.log(res);
        this.updateCategorieForm.patchValue({
          titre : categorie.titre,
          id : categorie.id
        })
        
      },
      err=>{
        console.log(err);
      }
    )
  }

  editCategorie() {
    //let data = this.updateCategorieForm.value;

    this.categoriesservice.updateCategorie(this.updateCategorieForm.value).subscribe( 
      data => {
        console.log(this.updateCategorieForm.value);
        this.router.navigate(['categorie']);        
        this.toastr.success('Done');
      }
    )

  }

}
