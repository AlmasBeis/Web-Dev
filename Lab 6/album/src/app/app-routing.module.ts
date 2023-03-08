import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AlbumsComponent} from "./albums/albums.component";
import {DetailComponent} from "./detail/detail.component";
import {PhotosComponent} from "./photos/photos.component";

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: DetailComponent},
  {path: 'albums/:id/photos', component: PhotosComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
