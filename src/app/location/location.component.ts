import { Component, OnInit } from '@angular/core';
import { Location } from '../Modal/location';
import { LocationService } from '../Shared/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {


  constructor(private locservice:LocationService) { }

   location: Location[]=[];

  ngOnInit(): void {
    this.getAllLocations();
    this.locservice.getAllLocations().subscribe((result)=>{
     
    });
  }
  getAllLocations(){
    this.locservice.getAllLocations().subscribe((result)=>{
      this.location =result.data.getAllLocations;
    });
  }
  deleteLocation(id:any){
    this.locservice.deleteLocation(id).subscribe(()=>{
      this.getAllLocations();
    });
  }

}
