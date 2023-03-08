import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ChildAComponent} from "./child-a/child-a.component";
import {ChildBComponent} from "./child-b/child-b.component";

const routes: Routes = [
  {
    path: 'first-component',
    title: 'First component',
    component: FirstComponent,  // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a',  // child route path
        title: 'resolvedChildATitle',
        component: ChildAComponent,  // child route component that the router renders
      },
      {
        path: 'child-b',
        title: 'child b',
        component: ChildBComponent,  // another child route component that the router renders
      },
    ],
  },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
];  // sets up routes constant where you define your routes
class ResolveFn<T> {
}

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private route: ActivatedRoute,
  ) {}

}
