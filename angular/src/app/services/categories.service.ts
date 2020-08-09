import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Categories } from './categories';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private addUserUrl= "/api/addcategorie.php";
  private getOneUserUrl = "/api/getonecategorie.php?id=";
  private updateUserUrl = "/api/editcategorie.php?id=";
  private deleteUserUrl = "/api/deletecategorie.php?id=";
  private url = '/api/categorie.php';
  
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  redirectUrl: string;
  //baseUrl:string = "http://localhost/";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

  getCategories(){
    console.log('url:', this.url);
    return this.http.get<any>(this.url);//,{headers:this.headers});
  }
  getOneCategorie(id: number) {
    return this.http.get<any>(this.getOneUserUrl + id);//,{headers:this.headers})
  }

  deleteCategorie(id:number){
    console.log(id);
    return this.http.get<any>(this.deleteUserUrl +id);//{headers:this.headers});
  }
  addCategorie(categorie:Categories){
    return this.http.post<any>(this.addUserUrl , categorie);
  }
  /*
  updateCategorie(categorie:Categories){
    console.log(categorie.id);
    return this.http.post<any>(this.updateUserUrl + categorie.id,{body: categorie},{headers:this.headers});
  }*/
  updateCategorie(categorie:Categories): Observable<any> {
    console.log(categorie);
    return this.http.put<Categories>(this.updateUserUrl, categorie, httpOptions).pipe(
      tap((newCategories: Categories) => console.log(`added hero w/ id=${newCategories.id}`)),
      catchError(this.handleError<Categories>('create'))
    );
  }

}
