import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navList = [
    {navItem:'Home', Url:'app-home'},
    {navItem:'About Us', Url:'app-aboutus'},
    {navItem:'Products', Url:'app-products'},
    {navItem:'Contact Us', Url:'app-contactus'},
    // {navItem:'Account info', Url:'app-accountinfo'}
  ]
  userNav = [
    {userItem:'Login', Url:'app-login', className:'glyphicon glyphicon-log-in'},
    {userItem:'Sign Up', Url:'app-register', className:'glyphicon glyphicon-user'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
