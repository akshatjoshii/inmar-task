import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const USER = 'user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginUser(): any {
   return this.http.get('assets/users-response.json');
  }
  setUser(user): void {
    localStorage.setItem(USER, JSON.stringify(user));
  }
  getUser(): any {
    return JSON.parse(localStorage.getItem(USER));
  }
  logout(): void {
    localStorage.clear();
  }
}
