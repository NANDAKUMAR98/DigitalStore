import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from '../Modal/user';
import { UserService } from '../Shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: any;

  constructor(private userService:UserService,private router:Router) { }
  allUsers:USER[]=[];
  user:USER =new USER();

  ngOnInit(): void {
    this.userService.getuser().subscribe((data)=>{
      this.allUsers =data.data.getAllUsersDetails;
    });
  }
  userLogin(){
    if (this.user.email ==null && this.user.password !=null){
      alert('Enter Your Email.');
    }
    if (this.user.email ==null && this.user.password ==null){
      alert('Enter Your Password.');
    }
    if (this.user.email ==null && this.user.password ==null){
      alert('Enter Your Credentials.');
    }
if(this.user.email !=null && this.user.password !=null){
  let userExist =false;
  for (let i of this.allUsers){
    if(i.email === this.user.email && i.password === this.user.password){
      userExist =true;
      alert('Login Sucessfully');
      localStorage.setItem('token',this.user.jwt);
      localStorage.setItem('loggedIn',this.user.email);
       this.user.email;
       console.log('email',this.user.email);
      this.router.navigate(['dashboard']);
      
    }
  }
  if(!userExist){
    alert('Invalid credentials.User not found');
  }
}
}
}
