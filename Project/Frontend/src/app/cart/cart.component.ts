import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Cart} from "../interfaces/cart";
import {CartItem} from "../interfaces/cart-item";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart : CartItem[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {
          this.cart=cart;
          this.totalPrice()
        }
    );

  }
  deleteFromCart(id:number){
    this.cartService.deleteCart(id).subscribe(cart => {window.location.reload()})
  }
  deleteAll(){
    for (let card of this.cart){
      this.deleteFromCart(card.id)
    }
    this.total = 0;
  }
  totalPrice(){
    for (let card of this.cart) {
      this.total = Number(card.product.price) + this.total
    }
  }


}
