import { Component } from '@angular/core';
import {Product} from "../interfaces/product";
import {ProductService} from "../product.service";
import {UserService} from "../user.service";
import {CategoryService} from "../category.service";
import {Category} from "../interfaces/category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  category: Category[]=[];
  constructor(private categoryService: CategoryService, private userService: UserService) {
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(product => {
      this.category = product
    })
  }
}
