import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../interfaces/user";
import {Authtoken} from "../interfaces/authtoken";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit{
  constructor(private userService: UserService, private router:Router) {
  }
  user: User = <User>{};

  username: string="";
  email: string="";
  password: string = "";
  password2: string="";
  id: number = 0
  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
    this.userService.getUserId().subscribe(user=>{
      this.id = user.id
    })
  }

  onSubmit() {
    console.log(this.user.id)
    console.log(this.user.id)
    console.log(this.user.id)
    this.userService.updateUser(this.id, this.user.username, this.user.email, this.password, this.password2).subscribe(user => {
      this.user = user;
    },
      error => {
        console.error(error);
        alert("wrong email or password");
      });
    alert("Edited")
    this.router.navigateByUrl('/profile')
  }

}
