import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'category', component: CategoryListComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
