import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GarbagePoint} from '../model/garbagePoint';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GarbageService{

  url="/api";
  constructor(private http: HttpClient ) {}

  getGarbagePointsByUserId(userId: number): Observable<any>{
    return this.http.get(this.url+`+/garbages/${userId}`);
  }

  createGarbagePoint(garbage: GarbagePoint): Observable<any>{
    return this.http.post(this.url+`/createGarbagePoint`, garbage);
  }

  deleteGarbagePoint(id: number): Observable<any>{
    return this.http.delete(this.url+`/delete/${id}`);
  }

  getUserById(id: number): Observable<any>{
    return this.http.get(this.url+`/users/${id}`);
  }
}
