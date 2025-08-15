import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  students:any
  constructor (public http:HttpClient, public app:AppComponent){
      let url='http://localhost:8080/get'
      this.http.get(url).subscribe((data:any)=>{
         this.students=data
      } );}

      logout(){
        this.app.isLoggedIn=0;
      }

      delete(student:any)
      {
        
        let url='http://localhost:8080/delete'+student.id
      this.http.get(url).subscribe((data:any)=>{
        
         if(data==1){
          let index=this.students.indexOf(student)
          if(index>=0)
          {
            this.students.splice(index,1)
          }
         }
         else{
             window.alert('Exception on server')
         }} );}
        
   name:string='';
  marks:number=0;
  
  
  add(){
     let obj={
      "name":this.name,
      "marks":this.marks 
    }
    if( this.name==""){
      window.alert('Exception')
    }
    else{
  
      let url='http://localhost:8080/save'
      this.http.post(url,obj).subscribe((data:any)=>{
         if(data==null){
          console.log('hi')
          window.alert('exception on server')
         }
         else{
          //console.log('hi')
          this.students.push(data);
          this.name=''
          this.marks=0
        }
  
  
      } );}
  }

}
