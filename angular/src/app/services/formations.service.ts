import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Formations } from './formations';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  private addUserUrl= "/api/addformation.php";
  private getOneUserUrl = "/api/getoneformation.php?id=";
  private updateUserUrl = "/api/editformation.php?id=";
  private deleteUserUrl = "/api/deleteformation.php?id=";
  
  private url = '/api/formation.php';
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

getFormations(){
  console.log('url:', this.url);
  return this.http.get<any>(this.url);//,{headers:this.headers});
}
getOneFormation(id: number) {
  return this.http.get<any>(this.getOneUserUrl + id);//,{headers:this.headers})
}

deleteFormation(id:number){
  console.log(id);
  return this.http.get<any>(this.deleteUserUrl +id);//{headers:this.headers});
}
addFormation(formation:Formations){
  return this.http.post<any>(this.addUserUrl , formation);
}
/*
updateFormation(formation:Formations){
  console.log(formation.id);
  return this.http.post<any>(this.updateUserUrl + formation.id,{body: formation},{headers:this.headers});
}*/
updateFormation(formation:Formations): Observable<any> {
  console.log(formation);
  return this.http.put<Formations>(this.updateUserUrl, formation, httpOptions).pipe(
    tap((newFormations: Formations) => console.log(`added hero w/ id=${newFormations.id}`)),
    catchError(this.handleError<Formations>('create'))
  );
}
}
