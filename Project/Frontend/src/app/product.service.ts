import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiLinkService} from "./api-link.service";
import {Observable} from "rxjs";
import {Product} from "./interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = "";

  constructor(private httpClient: HttpClient, private apiService: ApiLinkService) {
    this.apiUrl = this.apiService.getBaseUrl() + "/api/products/"
  }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl)
  }
}