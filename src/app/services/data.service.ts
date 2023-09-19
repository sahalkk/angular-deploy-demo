import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  private url: string;
  constructor(private config: DataServiceConfig, private httpClient: HttpClient) {
    this.url = config.url;
   }

  getAll() {
    return this.httpClient.get<any[]>(this.url).pipe(
      catchError(this.handleError)
      );
  }

  get(id: string) { 
    return this.httpClient.get<any>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
      );    
  }

  create(resource: any) {
    return this.httpClient.post(this.url, resource).pipe(
      catchError(this.handleError)
      );
  }

  update(resource: { id: string; }) {
    return this.httpClient.patch(`${this.url}/${resource.id}`, { isRead: true }).pipe(
      catchError(this.handleError)
      );
  }

  delete(id: string): Promise<any> {
    return this.httpClient.delete(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
      ).toPromise();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400)
      return throwError(new BadInput(error.error));
  
    if (error.status === 404)
      return throwError(new NotFoundError());
    
    return throwError(new AppError(error));
  }
}

export class DataServiceConfig {
  constructor(public url: string){}
}
