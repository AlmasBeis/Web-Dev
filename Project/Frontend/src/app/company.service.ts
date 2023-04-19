import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Company} from "./company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URl: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
  }
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URl}/api/companies/`);
  }
}
