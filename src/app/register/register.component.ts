import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = ''
  email = ''
  password = ''
  username = ''

  constructor(private http: Http){}

  onSubmit(form: NgForm) {
    console.log(form.value);
    let data = {
      'username':form.value.username,
      'email':form.value.email,
      'password':form.value.password
    }
    this.http.post('http://localhost:3000/update', data).map((res: Response) => {
      console.log('response',Response)
      // this.router.navigateByUrl('/home-page');
    }).subscribe()



  }

  ngOnInit() {

  }
}
