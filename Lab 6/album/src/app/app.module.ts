import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AboutComponent,
    DetailComponent,
    PhotosComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIf,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
