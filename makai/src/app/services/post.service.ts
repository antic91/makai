import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{


  constructor(http: HttpClient, private router: ActivatedRoute) {
    super(http)

  }
  getBlog(url: string, resource:{ name: string, id:number }): any{
    return this.http.post(url, resource).pipe(
      // map((response: any) => response.json()),
      catchError(this.handleError))
  }
  getProduct(url: string, resource:{ catId: number, subCatId: number, prodId: number }): any{
    return this.http.post(url, resource).pipe(
      // map((response: any) => response.json()),
      catchError(this.handleError))
  }

}
