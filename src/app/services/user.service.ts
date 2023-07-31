import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { API_END_POINT } from 'src/api_endpoints';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signup(data: Omit<User, '_id'>): Observable< Omit<User, 'password'> > {
    return this.http.post< Omit<User, 'password'> >(`${API_END_POINT}/user/signup`, data)
  }

  login(data: Omit<User, '_id'>): Observable< Omit<User, 'password'> > {
    return this.http.post< Omit<User, 'password'> >(`${API_END_POINT}/user/login`, data)
  }
}
