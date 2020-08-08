import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { StudentsComponent } from './admin/students/students.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { UsersComponent } from './admin/users/users.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { FormationsComponent } from './admin/formations/formations.component';
import { EmploisComponent } from './admin/emplois/emplois.component';
import { EditUsersComponent } from './admin/edit-users/edit-users.component';
import { EditEmploisComponent } from './admin/edit-emplois/edit-emplois.component';
import { EditFormationsComponent } from './admin/edit-formations/edit-formations.component';
import { EditCoursComponent } from './admin/edit-cours/edit-cours.component';
import { EditCategoriesComponent } from './admin/edit-categories/edit-categories.component';
import { CoursComponent } from './admin/cours/cours.component';
import { CategorieComponent } from './admin/categorie/categorie.component';
import { AddUsersComponent } from './admin/add-users/add-users.component';
import { AddFormationsComponent } from './admin/add-formations/add-formations.component';
import { AddEmploisComponent } from './admin/add-emplois/add-emplois.component';
import { AddCoursComponent } from './admin/add-cours/add-cours.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddCategorieComponent } from './admin/add-categorie/add-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeacherComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    FormationsComponent,
    EmploisComponent,
    EditUsersComponent,
    EditEmploisComponent,
    EditFormationsComponent,
    EditCoursComponent,
    EditCategoriesComponent,
    CoursComponent,
    CategorieComponent,
    AddUsersComponent,
    AddFormationsComponent,
    AddEmploisComponent,
    AddCoursComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    AddCategorieComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule
   
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
