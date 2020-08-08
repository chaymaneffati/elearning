import { EditFormationsComponent } from './admin/edit-formations/edit-formations.component';
import { AddFormationsComponent } from './admin/add-formations/add-formations.component';
import { AddCategorieComponent } from './admin/add-categorie/add-categorie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsersComponent } from './admin/add-users/add-users.component';
import { EditUsersComponent } from './admin/edit-users/edit-users.component';

import { TeacherComponent } from './admin/teacher/teacher.component';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { EmploisComponent } from './admin/emplois/emplois.component';
import { FormationsComponent } from './admin/formations/formations.component';
import { CoursComponent } from './admin/cours/cours.component';
import { CategorieComponent } from './admin/categorie/categorie.component';
import { StudentsComponent } from './admin/students/students.component';
import { EditCategoriesComponent } from './admin/edit-categories/edit-categories.component';
import { EditCoursComponent } from './admin/edit-cours/edit-cours.component';
import { AddCoursComponent } from './admin/add-cours/add-cours.component';

const routes: Routes = [
  {
    path:'adduser',
    component:AddUsersComponent
  },
  {
    path:'addcour',
    component:AddCoursComponent
  },
  {
    path:'edituser/:id',
    component:EditUsersComponent
  },
  {
    path:'students',
    component:StudentsComponent
  },

  {
    path:'formateurs',
    component:TeacherComponent
  },
  {
    path:'formations',
    component:FormationsComponent
  },
  {
    path:'cours',
    component:CoursComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'loginadmin',
    component:LoginComponent
  },
  {
    path:'emplois',
    component:EmploisComponent
  },
  {
    path:'categorie',
    component:CategorieComponent
  },
  {
    path:'addcategorie',
    component:AddCategorieComponent
  },
  {
    path:'editcategorie/:id',
    component:EditCategoriesComponent
  },
  {
    path:'editcour/:id',
    component:EditCoursComponent
  },
  
  {
    path:'addformations',
    component:AddFormationsComponent
  },
  {
    path:'editformations/:id',
    component:EditFormationsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
