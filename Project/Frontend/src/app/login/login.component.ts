import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private userService: UserService, private router: Router,) {
  }

  username: string = '';
  password: string = '';

  onSubmit() {
    this.userService.login(this.username, this.password).subscribe(
      data => {
        localStorage.setItem('token', data.token)
        this.username='';
        this.password='';
        this.router.navigateByUrl('/products');
      },
      error => {
        console.error(error);
        alert("wrong login or password");
      })
  }

}
