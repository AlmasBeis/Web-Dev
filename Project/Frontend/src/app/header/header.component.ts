import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  logged: boolean = false;
  constructor(private userService:UserService) {
    this.logged = this.userService.getLog()
  }



}
