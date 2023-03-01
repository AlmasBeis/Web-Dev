import {Component, OnInit} from '@angular/core';

import {Product, products} from '../products';

import {Category ,categories} from "../category";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products = products;
  category: Category| undefined;
  constructor(
    private route: ActivatedRoute,
  ) {}
  liked = false;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale')
  }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    // Find the product that correspond with the id provided in route.
    this.category = categories.find(
      (category) => category.id === categoryIdFromRoute
    );
  }
  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }
  likeProduct(product: Product) {


      product.likes+= 1;
      window.alert('You liked this product!');
      this.liked = true;
    //
    // else
    // {
    //   product.likes-= 1;
    //   window.alert('You unliked this product!')
    //   this.liked = false;
    // }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
