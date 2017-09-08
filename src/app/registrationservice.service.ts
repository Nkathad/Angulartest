import { Injectable } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class RegistrationserviceService {
  http: Http;
  posts_Url: string = 'http://localhost:3000/update';
  constructor(public _http: Http) {
     this.http = _http;
  }
  registerUser() {
     return this.http.post(this.posts_Url, {  }).map(res =>  res.json());
  }

}
