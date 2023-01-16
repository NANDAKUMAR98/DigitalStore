import { Component, OnInit } from '@angular/core';
import { Report } from '../Modal/report';
import { ReportService } from '../Shared/report.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit {

  constructor(private repoService:ReportService) { }

  report:Report[]=[];

  ngOnInit(): void {
    this.getAllReports();
    this.repoService.getAllReports().subscribe((result)=>{
      this.report =result.data.getAllReports;

    });
  }
  getAllReports(){
    this.repoService.getAllReports().subscribe((result)=>{
      this.report =result.data.getAllReports;
    });
  }
  deleteReport(id:any){
    this.repoService.deleteReport(id).subscribe(()=>{
      this.getAllReports();
    });
  }

}
