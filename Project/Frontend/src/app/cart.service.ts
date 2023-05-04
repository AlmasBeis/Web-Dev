import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiLinkService} from "./api-link.service";
import {Observable} from "rxjs";
import {Cart} from "./interfaces/cart";
import {CartItem} from "./interfaces/cart-item";


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

  createCart(product_id: number, quantity: number): Observable<CartItem>{
    return this.httpClient.post<CartItem>(this.apiUrl, {product_id, quantity})
  }
  addToCart(product_id: number, cartItems: CartItem[], quant: number) {
    // check if product already exists in cart
    const existingCartItem = cartItems.find(item => item.product.id === product_id);

    let quantity;
    if (existingCartItem) {
      if  (quant>1){
        existingCartItem.quantity +=quant;
      }else{
        existingCartItem.quantity += 1;
      }
      quantity = existingCartItem.quantity
      return this.httpClient.put<CartItem>(`${this.apiUrl}${existingCartItem.id}/`, {product_id, quantity});
    } else {
      // if product does not exist, create new cart item

      return this.createCart(product_id, quant)
    }
  }


  deleteCart(cart: number): Observable<Cart>{
    return this.httpClient.delete<Cart>(this.apiUrl+cart+'/')
  }
}
