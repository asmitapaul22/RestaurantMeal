import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
_url='http://localhost:4040/enroll';
  constructor(private _http: HttpClient) { }
  enroll(user: User){
   return this._http.post<any>(this._url,user);
  }
}

