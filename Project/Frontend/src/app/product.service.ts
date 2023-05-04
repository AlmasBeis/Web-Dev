import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiLinkService} from "./api-link.service";
import {Observable, of} from "rxjs";
import {Product} from "./interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = "";

  constructor(private httpClient: HttpClient, private apiService: ApiLinkService) {
    this.apiUrl = this.apiService.getBaseUrl() + "/api/products/"
  }
  getProduct(productID: number): Observable<Product>{
    try {
      console.log(this.httpClient.get<Product>(`${this.apiUrl}${productID}/`));
      return this.httpClient.get<Product>(`${this.apiUrl}${productID}/`)
    } catch (error) {
      console.error(error);
      let product = <Product>{}
      return of(product)
    }
  }
  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl)
  }

  createProduct(category_id: number, name:string, price: number, description: string, image: string): Observable<Product>{
    return this.httpClient.post<Product>(this.apiUrl,{category_id, name, price, description, image})
  }




}
