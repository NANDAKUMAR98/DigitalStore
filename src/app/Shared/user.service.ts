import { Injectable } from '@angular/core';


import { Apollo, gql } from 'apollo-angular';

import { USER } from '../Modal/user';
import { UserDto } from '../Modal/userDto';

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
  createUser(user:any){
    return this.apollo.mutate({
      mutation:gql`
      mutation ($user:UserDto){
        createUser(userDto:$user){
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
      variables:{user},
    });
  }

  deleteUser(id:any){
    return this.apollo.mutate({
      mutation:gql`
      mutation ($id:Int){
        deleteUser(id:$id)
      }
      `,
      variables:{id},
    });
  }
}
