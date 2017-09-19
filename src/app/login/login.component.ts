import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../alert.service';
import { AuthenticationService } from '../authentication.service';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, AlertService]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService){}

  ngOnInit(){
    // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  // onLogin(form: NgForm) {
  //   let data = {
  //     'username':form.value.username,
  //     'password':form.value.password
  //   }
  //
  //   this.http.post('http://localhost:3000/login',data).map((res: Response) => {
  //     console.log('response',Response)
  //     this.router.navigateByUrl('/app-accountinfo');
  //     }).subscribe()
  // }

}
