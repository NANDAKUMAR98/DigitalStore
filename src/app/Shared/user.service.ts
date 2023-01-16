import { Injectable } from '@angular/core';


import { Apollo, gql } from 'apollo-angular';

import { USER } from '../Modal/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo:Apollo) { }

  getuser(){
    return this.apollo.watchQuery<{
      getAllUsersDetails:USER[];
    }>({
      query:gql`
      query getAllUsersDetails{
        getAllUsersDetails{
          id
          email
          name
          password
          role
          jwt
          location
          mobile
        }
      }
      `,
    }).valueChanges
  }
}
