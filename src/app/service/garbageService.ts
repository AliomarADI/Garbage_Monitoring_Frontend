import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Garbage} from '../model/garbage';


export class GarbageService{

  url: 'localhost:/8080/';

  constructor(private  http: HttpClient) {}

  getGarbagePointsByUserId(userId: number): Observable<any>{
    return this.http.get(`localhost:/8080/garbages/${userId}`);
  }

  createGarbagePoint(garbage: Garbage, phoneNumber: number): Observable<any>{
    return this.http.post(`localhost:/8080/createGarbagePoint/${phoneNumber}`, garbage);
  }

  deleteGarbagePoint(id: number): Observable<any>{
    return this.http.delete(`localhost:/8080/delete/${id}`);
  }

  getUserById(id: number): Observable<any>{
    return this.http.get(`localhost:/8080/users/${id}`);
  }
}
