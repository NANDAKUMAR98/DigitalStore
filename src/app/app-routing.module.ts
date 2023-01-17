import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderComponent } from './order/order.component';
import { ReportingComponent } from './reporting/reporting.component';
import { AuthGuard } from './Shared/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'order',component:OrderComponent,canActivate:[AuthGuard]},
  {path:'my-order',component:MyOrderComponent,canActivate:[AuthGuard]},
  {path:'location',component:LocationComponent,canActivate:[AuthGuard]},
  {path:'reporting',component:ReportingComponent,canActivate:[AuthGuard]},
  {path:'admin-page',component:AdminPageComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
