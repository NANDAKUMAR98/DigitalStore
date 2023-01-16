import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { CarouselLabel } from '../Modal/carousel-label';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private apollo:Apollo) { }
  getAllLabels(){
    return this.apollo.watchQuery<{
      getAllLabels:CarouselLabel[];
    }>({
      query:gql`
      query getAllLabels{
        getAllLabels{
          id
          name
          imageurl
          description
        }
      }
      `,
    }).valueChanges
  }
}
