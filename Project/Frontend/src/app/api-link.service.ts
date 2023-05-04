import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiLinkService {
  private baseUrl = 'http://127.0.0.1:8000';
  constructor() { }

  getBaseUrl():string{
    return this.baseUrl;
  }
}
