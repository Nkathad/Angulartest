import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path: 'app-home', component: HomeComponent},
  {path: 'app-aboutus', component: AboutusComponent},
  {path: 'app-products', component: ProductsComponent},
  {path: 'app-contactus', component: ContactusComponent},
  {path: 'app-login', component: LoginComponent},
  {path: 'app-register', component: RegisterComponent},
  {path: 'app-forgotpassword', component: ForgotpasswordComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}

export const routingComponent = [HomeComponent, AboutusComponent, ProductsComponent, ContactusComponent, LoginComponent,RegisterComponent, ForgotpasswordComponent]
