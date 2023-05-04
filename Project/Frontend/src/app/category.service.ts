import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiLinkService} from "./api-link.service";
import {Observable} from "rxjs";
import {Category} from "./interfaces/category";
import {Product} from "./interfaces/product";

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
  getProducts(id: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.apiUrl}${id}/products/`)
  }
}
