import {Injectable, OnInit} from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Authtoken} from "./interfaces/authtoken";
import {ApiLinkService} from "./api-link.service";
import {Product} from "./interfaces/product";
import {User} from "./interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  private user: Authtoken = <Authtoken>{};
  logged: boolean = false;
  ngOnInit(){
    const token = localStorage.getItem("token")
    if(token){
      this.logged = true
    }
  }

  constructor(private http: HttpClient, private apiService: ApiLinkService) {
  }
  login(email: string, password: string): Observable<Authtoken>{
    return this.http.post<Authtoken>(`${this.apiService.getBaseUrl()}/api/login/`, {email, password})

  }

  logout(){
    localStorage.removeItem('token');
    this.logged = false;
  }
  getUserId(): Observable<User>{
    return this.http.get<User>(`${this.apiService.getBaseUrl()}/api/userid/`)
  }
  signUp(username: string, email: string, password: string, password2: string){
    return this.http.post<Authtoken>(`${this.apiService.getBaseUrl()}/api/signup/`, { username, email, password, password2 })
  }
  getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiService.getBaseUrl()}/api/userinfo/`)
  }

  updateUser(id: number, username: string, email: string, password: string, password2: string): Observable<User>{
    return this.http.put<User>(`${this.apiService.getBaseUrl()}/api/password/${id}/`, { username, email, password, password2 })
  }
}
