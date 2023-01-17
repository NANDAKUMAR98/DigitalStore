import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { OrderComponent } from './order/order.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReportingComponent } from './reporting/reporting.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApolloModule } from 'apollo-angular';
import { GraphqlModule } from './graphql/graphql.module';
import { MyOrderComponent } from './my-order/my-order.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageComponent,
    DashboardComponent,
    LocationComponent,
    OrderComponent,
    NavSidebarComponent,
    PipesComponent,
    ReportingComponent,
    MyOrderComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ApolloModule,
    FormsModule,
    GraphqlModule,
    HttpClientModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
