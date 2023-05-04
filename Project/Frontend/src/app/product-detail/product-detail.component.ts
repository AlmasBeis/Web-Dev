import {Component, OnInit} from '@angular/core';
import {Product} from "../interfaces/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {CartService} from "../cart.service";
import {CartItem} from "../interfaces/cart-item";
import {UserService} from "../user.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  quantity: number = 1;
  minQuantity: number = 1;
  maxQuantity: number = 10;
  incrementQuantity() {
    if (this.quantity < this.maxQuantity) {
      this.quantity++;
    }
  }

  decrementQuantity() {
    if (this.quantity > this.minQuantity) {
      this.quantity--;
    }
  }
  cart: CartItem[] = [];
  product: Product = <Product>{};
  constructor(private route: ActivatedRoute, private productService: ProductService,
              private cartService:CartService, private userService: UserService) {
  }
  logged = this.userService.getLog();
  ngOnInit() : void {
    this.cartService.getCart().subscribe(cart => {
          this.cart=cart;
        }
    );
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productID'));

    this.productService.getProduct(productIdFromRoute).subscribe(product => {
      this.product = product
    })
  }
  addToCart(id: number, quantity: number, event: Event) {
    if(this.logged){
      this.cartService.addToCart(id, this.cart, quantity).subscribe(product=>{})
      event.stopPropagation();
      alert("go to cart")

    }else{
      alert("Log in first")
    }
  }
}
