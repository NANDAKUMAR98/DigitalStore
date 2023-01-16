import { Injectable } from '@angular/core';
import { USER } from '../Modal/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService:UserService) { }
  user:USER=new USER();
  users:USER[] =[];
  IsLoggedInToken() {
    return !!localStorage.getItem('token');
  }
  getAllUsers(){
    this.userService.getuser().subscribe((result)=>{
      this.users =result.data.getAllUsersDetails;
      this.getLoggedInUser();
    });
  }
  getLoggedInUser():any{
    const loggedInEmail =localStorage.getItem('loggedIn');
    for (let user of this.users){
      if(loggedInEmail == user.email){
        this.user =user;
        localStorage.setItem('token',this.user.jwt)
        return this.user;
      }
    }
  }
}
