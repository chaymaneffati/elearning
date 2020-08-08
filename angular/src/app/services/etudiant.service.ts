import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private deleteUserUrl = "http://localhost/elearning/api/delete_user.php?id=";
  private url = 'http://localhost/api/etudiants.php';

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  redirectUrl: string;
  
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

  getEtudiants(){
    console.log('url:', this.url);
    return this.http.get<any>(this.url);//,{headers:this.headers});
  }

  deleteEtudiant(id:number){
    return this.http.get<any>(this.deleteUserUrl +id);//{headers:this.headers});
  }
  
  
}
