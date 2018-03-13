import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 isValid:boolean=true;
  constructor(private router:Router) { }

  ngOnInit() {
  }
doLogin(username:string,password:string){
  if(username=="admin" && password=="admin"){
    this.router.navigate(['/landing']);
  }
  else{
this.isValid=false;
  }
}
}
