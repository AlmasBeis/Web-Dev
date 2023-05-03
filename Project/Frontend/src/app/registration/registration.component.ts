import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private userService: UserService, private router: Router) {
  }
  username: string = "";
  email: string = "";
  password: string = "";
  passwordCopy: string = "";
  onSubmit() {
    if(this.password===this.passwordCopy){
      this.userService.signUp(this.username, this.email, this.password, this.passwordCopy ).subscribe(
        user => {
          this.userService.login(this.email, this.password).subscribe(data=>{
            localStorage.setItem('token',data.token)
          });
          setTimeout(()=>{this.router.navigateByUrl('/products')},1000);
        },
        error => {
          console.error(error);
          alert("such user already exists or some field is empty");
        })
    }else{
      alert("Passwords does not match")
    }

  }
}
