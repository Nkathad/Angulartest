import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService, AlertService]
})
export class RegisterComponent implements OnInit {
  appTitle = 'Register'
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService){}

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/app-login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

  // onSubmit(form: NgForm) {
  //   let data = {
  //     'username':form.value.username,
  //     'email':form.value.email,
  //     'password':form.value.password,
  //     'firstName':form.value.firstName,
  //     'lastName':form.value.lastName
  //   }
  //   this.http.post('http://localhost:3000/update', data).map((res: Response) => {
  //     console.log('response',Response)
  //     this.router.navigateByUrl('/app-thankyou');
  //   }).subscribe()
  // }

  ngOnInit() {

  }
}
