import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiLinkService} from "./api-link.service";
import {Observable} from "rxjs";
import {Cart} from "./interfaces/cart";
import {CreateCart} from "./interfaces/create-cart";
import {CartItem} from "./interfaces/cart-item";
import {Product} from "./interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl: string = "";

  constructor(private httpClient: HttpClient, private apiService: ApiLinkService) {
    this.apiUrl = this.apiService.getBaseUrl() + "/api/cart/"
  }

  getCart(): Observable<CartItem[]>{
    return this.httpClient.get<CartItem[]>(this.apiUrl)
  }

  createCart(product_id: number): Observable<CartItem>{
    return this.httpClient.post<CartItem>(this.apiUrl, {product_id})
  }
  addToCart(product_id: number, cartItems: CartItem[]) {
    // check if product already exists in cart
    const existingCartItem = cartItems.find(item => item.product.id === product_id);

    let quantity;
    if (existingCartItem) {
      // if product already exists, increment quantity
      existingCartItem.quantity += 1;
      quantity = existingCartItem.quantity
      return this.httpClient.put<CartItem>(`${this.apiUrl}${existingCartItem.id}/`, {product_id, quantity});
    } else {
      // if product does not exist, create new cart item
      const newCartItem = {
        product_id: product_id,
        quantity: 1
      };
      return this.createCart(product_id)
    }
  }


  deleteCart(cart: number): Observable<Cart>{
    return this.httpClient.delete<Cart>(this.apiUrl+cart+'/')
  }
}
