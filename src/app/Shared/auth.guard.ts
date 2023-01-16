import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { USER } from '../Modal/user';
import { AuthService } from './auth.service';
import { UserService } from './user.service';


@Injectable({
    providedIn:'root',
})

export class AuthGuard implements CanActivate{
   
    constructor(
        private userService:UserService,
        private auth:AuthService,
        private router:Router
    ){}
    
    user:USER =new USER();

    canActivate(){
        if(this.auth.IsLoggedInToken()){
            return true;
        }
        alert('Your not loggedIn, Please login');
        this.router.navigate(['login']);
        return false;
    }
    
}

