import {Component, OnInit} from '@angular/core';
import {Product} from "../interfaces/product";
import {ProductService} from "../product.service";
import {UserService} from "../user.service";
import {CartService} from "../cart.service";
import {CartItem} from "../interfaces/cart-item";
import {User} from "../interfaces/user";
import {empty, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../category.service";

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





  constructor(private productService: ProductService, private userService: UserService,
              private cartService: CartService, private router: Router, private route: ActivatedRoute,private categoryService:CategoryService) {
  }

  logged = this.userService.getLog();
  is_super: Boolean = false;

  user: Observable<User> = this.userService.getUser();

  addProductForm: Boolean = false;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryID'));
    this.categoryService.getProducts(categoryIdFromRoute).subscribe((data) => {
      this.products = data;
    })

    if (!categoryIdFromRoute){
      this.productService.getProducts().subscribe(product => {
        this.products = product
      })
    }

    this.cartService.getCart().subscribe(cart => {
          this.cart=cart;
        }
    );
    this.user.subscribe(data=>{
      this.is_super = data.is_superuser
    })

  }



    addToCart(id: number, quantity: number, event: Event) {
    if (this.logged){
      this.cartService.addToCart(id, this.cart, quantity).subscribe(product=>{})
      event.stopPropagation();
      alert("go to cart")
    }else{
      alert("Log in first ")
    }
  }
  toDetails(product: Product){
    this.router.navigateByUrl('/products/'+ product.id);
  }
  onSubmit() {
    this.productService.createProduct(this.category_id, this.name, this.price, this.description, this.image).subscribe(
        data=> {alert("product created"); window.location.reload();
        },error => {
      console.error(error);
      alert("wrong data ");
    })

  }
}
