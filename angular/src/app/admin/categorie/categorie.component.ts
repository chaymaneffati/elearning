import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Categories } from '../../services/categories';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  Categories = [];

  constructor(private categoriesService : CategoriesService ,
    private toastr: ToastrService , private router:Router)
  { }

   ngOnInit(): void {

    this.categoriesService.getCategories().subscribe(
      res=>{
        this.Categories = res;
        console.log(this.Categories);
      }
    );
  }
  deleteCategorie(id){
    console.log(id);
    this.categoriesService.deleteCategorie(id).subscribe(
      res=>{
        console.log(res);
      }
    );
  }


}
