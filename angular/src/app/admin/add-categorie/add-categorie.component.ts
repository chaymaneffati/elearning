import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  addCategorieForm: FormGroup
  constructor(    private fb: FormBuilder, 
    private router:Router,
    private toastr: ToastrService,
    private categoriesservice : CategoriesService) {

     let formControls = {

     titre: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
    }

    this.addCategorieForm = this.fb.group(formControls)
  }

  get titre() { return this.addCategorieForm.get('titre') }


  ngOnInit(): void {
  }

  addCategorie() {
    //let data = this.addCategorieForm.value;

    this.categoriesservice.addCategorie(this.addCategorieForm.value).subscribe( 
      data => {
        this.router.navigate(['categorie']);
        this.toastr.success('Done');
      }
    )

  }


}
