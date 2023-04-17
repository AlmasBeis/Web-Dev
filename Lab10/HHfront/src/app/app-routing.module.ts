import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyComponent} from "./company/company.component";
import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {VacancyComponent} from "./vacancy/vacancy.component";

const routes: Routes = [
  {path: 'companies', component: CompanyComponent},
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'companies/:id',component: VacancyComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
