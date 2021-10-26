import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../commonErrors/app-error';
import { NotFoundError } from '../commonErrors/not-found-error';
import { ErrorError } from '../commonErrors/error-error';
import { map } from 'rxjs/operators';
import { throwError, concat, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected http: HttpClient) { }

  getAll(url:string):any{
    return this.http.get(url, {observe: 'body', responseType: 'json'})
      .pipe(
        //map((response: any) => response.json()),
        catchError(this.handleError)
      )
  }

  create(url: string, resource:{ title: string }): any{
    return this.http.post(url, resource).pipe(
      // map((response: any) => response.json()),
      catchError(this.handleError))
  }

  update(url: string, id: number ): any{
    return this.http.patch(url + '/' + id, JSON.stringify({ isRead: true })).pipe(
      // map((response: any) => response.json()),
      catchError(this.handleError)
    )
    //this.http.put(this.url, JSON.stringify(item))
  }

  delete(url: string, id:number): any{
    return this.http.delete(url + '/' + id).pipe(
      // map((response: any) => response.json()),
      catchError(this.handleError)
    )
  }

  protected handleError(_error: Response): any{
    if (_error.status === 400) {
          return throwError(new ErrorError())
        }
    if (_error.status === 404) {
          return throwError(new NotFoundError());

        }
        return throwError(new AppError());
  }
}
