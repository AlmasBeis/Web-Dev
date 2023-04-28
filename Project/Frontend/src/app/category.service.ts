import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiLinkService} from "./api-link.service";
import {Observable} from "rxjs";
import {Product} from "./interfaces/product";
import {Category} from "./interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string = "";

  constructor(private httpClient: HttpClient, private apiService: ApiLinkService) {
    this.apiUrl = this.apiService.getBaseUrl() + "/api/categories/"
  }

  getCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.apiUrl)
  }
}
