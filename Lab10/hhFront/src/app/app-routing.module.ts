import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyComponent} from "./company/company.component";
import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'api/companies', component: CompanyComponent},
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
