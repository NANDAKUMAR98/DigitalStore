import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import { USER } from '../Modal/user';
import { UserService } from '../Shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  allUsers:USER[]=[];
  user:USER =new USER();

  ngOnInit(): void {
   this.getAllUsersDetails();
  }

  getAllUsersDetails(){
    this.userService.getuser().subscribe((result)=>{
      this.allUsers =result.data.getAllUsersDetails;
      // console.log("Users",this.allUsers =result.data.getAllUsersDetails);
    });
  }
  addUser(){
    this.userService.createUser(this.user).subscribe(()=>{
      alert("Signup Sucessfully")
      this.router.navigate(['login']);
    });
  }
  deteleUser(id:any){
    this.userService.deleteUser(id).subscribe(()=>{
      this.getAllUsersDetails();
    });
  }

}
