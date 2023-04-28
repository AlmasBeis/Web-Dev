import { Component } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userService:UserService) {
  }
  logout(){
    this.userService.logout()

  }
}