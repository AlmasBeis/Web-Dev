import {Component, OnInit} from '@angular/core';
import {Product} from "../interfaces/product";
import {ProductService} from "../product.service";
import {UserService} from "../user.service";
import {CartService} from "../cart.service";
import {CartItem} from "../interfaces/cart-item";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[]=[];
  cart: CartItem[]=[];

  constructor(private productService: ProductService, private userService: UserService, private cartService: CartService) {
  }
  logged = this.userService.logged
  ngOnInit(): void {
    this.productService.getProducts().subscribe(product => {
      this.products = product
    })
    this.cartService.getCart().subscribe(cart => {
          this.cart=cart;
        }
    );
  }
  // addToCart(){
  //   this.cartService.createCart(this.product)
  // }

  addToCart(id: number, event: Event) {
    this.cartService.addToCart(id,this.cart).subscribe(product=>{})
    event.stopPropagation();
    alert("go to cart")
  }

}
