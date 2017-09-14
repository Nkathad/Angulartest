import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = ''
  username = ''
  password = ''

  constructor(private http: Http, private router: Router){}

  ngOnInit() {}

  onLogin(form: NgForm) {
    let data = {
      'username':form.value.username,
      'password':form.value.password
    }

    this.http.post('http://localhost:3000/login',data).map((res: Response) => {
      console.log('response',Response)
      this.router.navigateByUrl('/app-home');
      }).subscribe()
  }

}
