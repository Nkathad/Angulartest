import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { routingComponent } from './app-routing.module'


import { fakeBackendProvider } from './fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductfilterPipe } from './productfilter.pipe';
import { SearchComponent } from './search/search.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    routingComponent,
    ProductfilterPipe,
    SearchComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
