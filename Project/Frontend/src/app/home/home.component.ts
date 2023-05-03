import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router,) {
  }
  private WelcomeMode: string | undefined;
  // ngOnInit(): void{
  //   if(localStorage.getItem('token')){
  //     this.router.navigateByUrl("/products")
  //   }
  //   this.toLogin()
  //   this.WelcomeMode = "Login"
  // }
  toLogin(): void{
    this.WelcomeMode="Login"
  }
  toNewAcc(): void{
    this.WelcomeMode="NewAcc"
  }

  getMode(){
    return this.WelcomeMode
  }
}
