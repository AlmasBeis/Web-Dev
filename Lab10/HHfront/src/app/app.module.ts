import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import {NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { VacancyComponent } from './vacancy/vacancy.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    VacancyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFor,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
