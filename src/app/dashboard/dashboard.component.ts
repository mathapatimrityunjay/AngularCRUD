import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataservice'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
responseArray={};
columns=['ID','Name','Email'];
  constructor(private datObj:DataService) { }

  ngOnInit() {
    this.datObj.getData().subscribe(res=>{this.responseArray=res;console.log("type is"+typeof(res))});
  }

}
