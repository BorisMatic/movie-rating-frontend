import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(data: any): Observable<User> {
    return this.httpClient.post<User>('login', data)
        .pipe(
            catchError(this.handleError)
        );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
        'Something bad happened; please try again later.');
  }
}
