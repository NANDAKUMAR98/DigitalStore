import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn');
    this.router.navigate(['login']);
  }

}
