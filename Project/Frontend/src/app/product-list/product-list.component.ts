import {Component, OnInit} from '@angular/core';
import {Product} from "../interfaces/product";
import {ProductService} from "../product.service";
import {UserService} from "../user.service";
import {CartService} from "../cart.service";
import {CartItem} from "../interfaces/cart-item";
import {User} from "../interfaces/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[]=[];
  cart: CartItem[]=[];

  category_id: number = 0;
  name: string = '';
  price:number = 0;
  image: string = '';
  description: string = '';





  constructor(private productService: ProductService, private userService: UserService, private cartService: CartService) {
  }
  logged = this.userService.logged

  is_super: Boolean = false;

  user: Observable<User> = this.userService.getUser();

  addProductForm: Boolean = false;

  ngOnInit(): void {
    this.productService.getProducts().subscribe(product => {
      this.products = product
    })
    this.cartService.getCart().subscribe(cart => {
          this.cart=cart;
        }
    );
    this.user.subscribe(data=>{
      this.is_super = data.is_superuser
    })
  }
  // addToCart(){
  //   this.cartService.createCart(this.product)
  // }

  addToCart(id: number, event: Event) {
    if (this.logged){
      this.cartService.addToCart(id,this.cart).subscribe(product=>{})
      event.stopPropagation();
      alert("go to cart")
    }else{
      alert("Log in first ")
    }




  }
  // addProduct(category_id: number, name:string, price: number, description: string, image: string){
  //   this.productService.createProduct(category_id,name,price,description,image).subscribe(data=>{})
  // }

  onSubmit() {
    this.productService.createProduct(this.category_id, this.name, this.price, this.description, this.image).subscribe(
        data=> {alert("product created"); window.location.reload();
        },error => {
      console.error(error);
      alert("wrong data ");
    })

  }
}
