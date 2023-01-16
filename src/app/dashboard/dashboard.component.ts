import { Component, OnInit } from '@angular/core';
import { CarouselLabel } from '../Modal/carousel-label';
import { USER } from '../Modal/user';
import { AuthService } from '../Shared/auth.service';
import { CarouselService } from '../Shared/carousel.service';
import { UserService } from '../Shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
users:USER[] =[];
  constructor(
    private userService:UserService,
    private carouselService:CarouselService,
    private authservice:AuthService
  ) { }

  user:USER =new USER();
  carouselDetails:CarouselLabel[]=[];

  ngOnInit(): void {
    this.authservice.getAllUsers();
    this.getAllUsers();

    this.user.email;
    this.userService.getuser().subscribe((result)=>{
      result.data.getAllUsersDetails;
    });
    this.carouselService.getAllLabels().subscribe((result)=>{
      this.carouselDetails =result.data.getAllLabels;
    });
   }
   getAllUsers(){
    this.userService.getuser().subscribe((result)=>{
      this.users =result.data.getAllUsersDetails;
      this.getLoggedInUser();
    });
   }
   getLoggedInUser(){
    const loggedInEmail=localStorage.getItem('loggedIn');
    for (let user of this.users){
      if (loggedInEmail ==user.email){
        this.user=user;
      }
    }
   }

}
