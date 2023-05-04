import {Component, OnInit} from '@angular/core';
import {Category} from "../interfaces/category";
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  categorys: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(category=>{
      this.categorys = category;
    })
  }
  categoryProducts(id: number){
    this.router.navigateByUrl(`/category/${id}`)
  }



}
