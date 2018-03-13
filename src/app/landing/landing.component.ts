import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataservice'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
responseArray={};
columns=['ID','Name','Email'];
  constructor(private datObj:DataService) { }

  ngOnInit() {
    this.datObj.getData().subscribe(res=>{this.responseArray=res;console.log("type is"+typeof(res))});
  }

}
