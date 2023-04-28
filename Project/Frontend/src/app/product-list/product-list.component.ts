import {Component, OnInit} from '@angular/core';
import {Product} from "../interfaces/product";
import {ProductService} from "../product.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[]=[];

  constructor(private productService: ProductService, private userService: UserService) {
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(product => {
      this.products = product
    })
  }
  logged = this.userService.logged
}
