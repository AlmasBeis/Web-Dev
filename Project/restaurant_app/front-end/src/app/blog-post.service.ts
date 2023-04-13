import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable()
export class BlogPostService {

  constructor(private http: HttpClient, private _userService: UserService) { }

  // Uses http.get() to load data from a single API endpoint
  list() {
    return this.http.get('/api/posts');
  }

  // send a POST request to the API to create a new data object
  create(post, token) {
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token   // this is our token from the UserService (see Part 1)
      })
    };
    return this.http.post('/api/posts', JSON.stringify(post), httpOptions);
  }
}
