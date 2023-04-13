import {Component, OnInit} from '@angular/core';
import {BlogPostService} from './blog_post.service';   # add this
import {UserService} from './user.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * An array of all the BlogPost objects from the API
   */
  public posts;

  /**
   * An object representing the data in the "add" form
   */
  public new_post: any;

  constructor(private _blogPostService: BlogPostService, private _userService: UserService) { }

  ngOnInit() {
    this.getPosts();
    this.new_post = {};
    this.user = {
      username: '',
      password: ''
    };
  }

  ... user login/logout methods are unchanged from part 1. omitted for brevity ...

  getPosts() {
    this._blogPostService.list().subscribe(
      // the first argument is a function which runs on success
      data => {
        this.posts = data;
        // convert the dates to a nice format
        for (let post of this.posts) {
          post.date = new Date(post.date);
        }
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading posts')
    );
  }

  createPost() {
    this._blogPostService.create(this.new_post, this.user.token).subscribe(
       data => {
         // refresh the list
         this.getPosts();
         return true;
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );
  }

}
