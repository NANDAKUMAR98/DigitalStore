import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Apollo } from "apollo-angular";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";
import {  InMemoryCache } from "@apollo/client/core";
import { HttpLink} from 'apollo-angular/http';


@NgModule({
    declarations:[],
    imports:[CommonModule,HttpClientModule],
})

export class GraphqlModule{
    private readonly PRODUCT_URI=environment.producturl;

    constructor(apollo:Apollo, httpLink:HttpLink){
        apollo.createDefault({
            cache:new InMemoryCache({
                addTypename:false,
            }),
            link:httpLink.create({
                uri:this.PRODUCT_URI,
            }),

            defaultOptions:{
                query:{
                    fetchPolicy: 'no-cache',
                },

                watchQuery:{
                    fetchPolicy: 'no-cache',
                },
            },
        });
    }
}