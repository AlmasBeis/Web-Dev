import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "./company";
import {Vacancy} from "./vacancy";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  BASE_URl: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
  }
  getVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URl}/api/companies/${id}/vacancies`);
  }

}
