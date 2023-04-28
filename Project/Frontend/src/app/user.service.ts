import {Injectable, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Authtoken} from "./interfaces/authtoken";
import {ApiLinkService} from "./api-link.service";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  logged: boolean = false;
  ngOnInit(){
    const token = localStorage.getItem("token")
    if(token){
      this.logged = true
    }
  }

  constructor(private http: HttpClient, private apiService: ApiLinkService) {
  }
  login(username: string, password: string): Observable<Authtoken>{
    return this.http.post<Authtoken>(`${this.apiService.getBaseUrl()}/api/login/`, {username, password}) }


  logout(){
    localStorage.removeItem('token');
    this.logged = false;
  }
}
