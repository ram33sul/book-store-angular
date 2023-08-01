import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { API_END_POINT } from 'src/api_endpoints';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: User | null = null;
  token: string = '';

  constructor(private http: HttpClient) { }

  verifyUser(): Observable<{data: User, token: string}> {
    return this.http.get<{data: User, token: string}>(`${API_END_POINT}/user/verifyUser`)
  }

  signup(data: {username: string, password: string }): Observable<{data: User, token: string}> {
    return this.http.post<{data: User, token: string}>(`${API_END_POINT}/user/signup`, data);
  }

  login(data: {username: string, password: string }): Observable<{data: User, token: string}> {
    return this.http.post<{data: User, token: string}>(`${API_END_POINT}/user/login`, data);
  }

  logout(){
    this.userData = null;
    this.token = '';
  }

  setUserData(data: User) {
    this.userData = data;
  }

  setToken(token: string){
    this.token = token;
  }
}
