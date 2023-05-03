import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  constructor(private router: Router, private userService: UserService) {
  }
  logOut(){
    this.userService.logout()
    this.router.navigateByUrl("")
  }
  toSettings(){
    this.router.navigateByUrl("profile/settings")
  }
}
