import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Report } from '../Modal/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private apollo:Apollo) { }

  getAllReports(){
    return this.apollo.watchQuery<{
      getAllReports:Report[];
    }>({
      query:gql`
      query getAllReports{
      getAllReports{
          id
          location
          productname
          email
          requesttype
          description
        priority
        postcode
        }
      }
      `,
    }).valueChanges
  }
  createReport(report:any){
    return this.apollo.mutate({
      mutation:gql`
      mutation($report:ReportDto){
        createReport(ReportDto:$report){
          id
          location
          productname
          email
          requestype
          description
        priority
        postcode
        } 
      }`,
      variables:{report},
    });
  }
  deleteReport(id:any){
    return this.apollo.mutate({
      mutation:gql`
      mutation ($id:Int){
        deleteReport(id:$id)
      }`,
      variables:(id),
    });
  }
}