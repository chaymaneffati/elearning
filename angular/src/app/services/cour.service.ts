import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Cour } from './cour';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourService {

  private addUserUrl= "http://localhost/api/addcour.php";
  private getOneUserUrl = "http://localhost/api/getonecour.php?id=";
  private updateUserUrl = "http://localhost/api/editcour.php?id=";
  private deleteUserUrl = "http://localhost/api/deletecour.php?id=";
  private url = '/api/cour.php';
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

getCour(){
  console.log('url:', this.url);
  return this.http.get<any>(this.url);//,{headers:this.headers});
}
getOneCour(id: number) {
  return this.http.get<any>(this.getOneUserUrl + id);//,{headers:this.headers})
}

deleteCour(id:number){
  console.log(id);
  return this.http.get<any>(this.deleteUserUrl +id);//{headers:this.headers});
}
addCour(cour:Cour){
  return this.http.post<any>(this.addUserUrl , cour);
}
/*
updateCour(cour:Cour){
  console.log(cour.id);
  return this.http.post<any>(this.updateUserUrl + cour.id,{body: cour},{headers:this.headers});
}*/
updateCour(cour:Cour): Observable<any> {
  console.log(cour);
  return this.http.put<Cour>(this.updateUserUrl, cour, httpOptions).pipe(
    tap((newCour: Cour) => console.log(`added hero w/ id=${newCour.id}`)),
    catchError(this.handleError<Cour>('create'))
  );
}
}
