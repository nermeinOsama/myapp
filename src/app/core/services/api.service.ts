import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  photosUrl="https://jsonplaceholder.typicode.com/photos"
  usersUrl="https://jsonplaceholder.typicode.com/users"
  

  constructor(private http: HttpClient) {}


  getAllphotos(): Observable<any[]>{
    return this.http.get<any[]>(this.photosUrl);
  }
  getAllUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.usersUrl);
  }

}
