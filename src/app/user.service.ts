import { Injectable } from '@angular/core';
import { Users } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataUrl = 'http://localhost:8080/Users'

  constructor(private httpClient: HttpClient) { }

  postUserDataAPI(user:Users[]): Observable<Users[]> {
    console.log(user);
    return this.httpClient.post<Users[]>(`${this.dataUrl}`,user,{})
  }
}
