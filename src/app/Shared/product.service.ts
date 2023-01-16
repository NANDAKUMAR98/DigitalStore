import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Product } from '../Modal/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apollo:Apollo) { }

  getAllProduct(){
    return this.apollo.watchQuery<{
      getAllProducts:Product[];
    }>({
      query:gql`
      query getAllProducts{
        getAllProducts{
          id
          productName
              brandName
              productType
              description
              location
              imageUrl
              price
        }
      }
      `,
    }).valueChanges
  }
  createProduct(product:any){
    return this.apollo.mutate({
      mutation:gql`
      mutation($product:ProductDto){
        createProduct(productDto:$product){
          id
          productName
          productType
          brandName
          description
          location
          imageUrl
          price
        } 
      }`,
      variables:{product},
    });
  }
  deleteProduct(id:any){
    return this.apollo.mutate({
      mutation:gql`
      mutation ($id:Int){
        deleteProduct(id:$id)
      }`,
      variables:(id),
    });
  }
}
