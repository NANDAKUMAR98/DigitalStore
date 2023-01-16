import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Location } from '../Modal/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private apollo:Apollo) { }

  getAllLocations(){
    return this.apollo.watchQuery<{
      getAllLocations:Location[];
    }>({
      query:gql`
      query getAllLocations{
        getAllLocations{
          id
          locationType
          Address
          citytown
          location
          postcode
        }
      }
      `,
    }).valueChanges
  }
  createLocation(location:any){
    return this.apollo.mutate({
      mutation:gql`
      mutation($location:LocationDto){
        createLocation(locationDto:$location){
          id
    locationType
    Address
    citytown
    location
    postcode
        } 
      }`,
      variables:{location},
    });
  }
  deleteLocation(id:any){
    return this.apollo.mutate({
      mutation:gql`
      mutation ($id:Int){
        deleteLocation(id:$id)
      }`,
      variables:(id),
    });
  }
}