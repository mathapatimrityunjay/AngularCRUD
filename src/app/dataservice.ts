import {Observable} from "rxjs/Observable";
import {HttpClientModule,HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import{Injectable} from '@angular/core'

@Injectable()
export class DataService{
  constructor(private myhttp:HttpClient){ }

  getData(){
      return this.myhttp.get('https://jsonplaceholder.typicode.com/users');
  }

}