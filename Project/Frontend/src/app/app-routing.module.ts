import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserSettingsComponent} from "./user-settings/user-settings.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {CartComponent} from "./cart/cart.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {CategoryListComponent} from "./category-list/category-list.component";

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:productID', component: ProductDetailComponent},
  {path: 'category', component: CategoryListComponent},
  {path: 'category/:categoryID', component: ProductListComponent},
  {path: "profile", component: UserDetailComponent},
  {path: "profile/settings", component: UserSettingsComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
