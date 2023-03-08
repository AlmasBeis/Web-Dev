import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, UrlSegment } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {AsyncPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        matcher: (url) => {
          if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
            return {
              consumed: url,
              posParams: {
                username: new UrlSegment(url[0].path.slice(1), {})
              }
            };
          }

          return null;
        },
        component: ProfileComponent
      }
    ]),
    AsyncPipe,
    AsyncPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
