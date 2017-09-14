import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AccountinfoComponent } from './myaccount/accountinfo/accountinfo.component';
import { AuthGuard } from './guards/index';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'app-aboutus', component: AboutusComponent},
  {path: 'app-products', component: ProductsComponent},
  {path: 'app-contactus', component: ContactusComponent},
  {path: 'app-login', component: LoginComponent},
  {path: 'app-register', component: RegisterComponent},
  {path: 'app-forgotpassword', component: ForgotpasswordComponent},
  { path: 'app-thankyou', component: ThankyouComponent },
  { path: 'app-accountinfo', component: AccountinfoComponent },
  { path: '**', redirectTo: '' }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers:[
    AuthGuard
  ]
})
export class AppRoutingModule{}

export const routingComponent = [HomeComponent, AboutusComponent, ProductsComponent, ContactusComponent, LoginComponent,RegisterComponent, ForgotpasswordComponent, ThankyouComponent, AccountinfoComponent]
