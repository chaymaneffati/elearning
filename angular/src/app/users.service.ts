import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { users } from './users';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private addUserUrl= "/api/insert.php";
  private getOneUserUrl = "/api/getoneuser.php?id=";
  private updateUserUrl = "/api/update.php?id=";
  private deleteUserUrl = "/api/delete.php?id=";
  private url = '/api/liste.php';
  private login_api_endpoint = '/api/login.php';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  redirectUrl: string;
  //baseUrl:string = "http://localhost/";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { }
  public userlogin(username, password) {
    //alert(username)
    return this.http.post<any>(this.login_api_endpoint, {body:{ username, password }},{headers:this.headers})
    .pipe(map(Users => {
      console.log(Users);
      
    this.setToken(Users[0].name);
    this.getLoggedInName.emit(true);
    return Users;
    }));
    }

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

  getStudents(){
    console.log('url:', this.url);
    return this.http.get<any>(this.url);//,{headers:this.headers});
  }
  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id);//,{headers:this.headers})
  }

  deleteStudent(id:number){
    return this.http.get<any>(this.deleteUserUrl +id);//{headers:this.headers});
  }
  addStudent(student:users){
    return this.http.post<any>(this.addUserUrl , student);
  }
  /*
  updateStudent(student:Students){  
    console.log(student.id);
    return this.http.post<any>(this.updateUserUrl + student.id,{body: student},{headers:this.headers});
  }*/
  updateStudent(student:users): Observable<any> {
    return this.http.put<users>(this.updateUserUrl, student, httpOptions).pipe(
      tap((newStudents: users) => console.log(`added hero w/ id=${newStudents.id}`)),
      catchError(this.handleError<users>('create'))
    );
  }
 
 //token
setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }
 
 
}
