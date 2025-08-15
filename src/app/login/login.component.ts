import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor (public http:HttpClient, public app:AppComponent){

    }
    username:string="";
    password:string="";
  

    login(){
      let url='http://localhost:8080/login'+this.username
      this.http.post(url,this.password).subscribe((data:any)=>{
      
        if(data==1){
          this.app.isLoggedIn=1;
        }
        else if (data==2){
          window.alert('wrong username')
        }
        else if(data==4){
          window.alert('wrong password')
        }
        else{
          window.alert('Invalid Creadentials');
        }
        
      } );
    }


}
