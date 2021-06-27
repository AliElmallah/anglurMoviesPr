import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  currentUser= new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient , private _Router:Router) { 

    if(localStorage.getItem('userToken') != null){
      this.userLogin();
    }else{
      this._Router.navigate(['/signin'])
    }

  }

 signup(formValue:object):Observable<any>
 {
  return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup",formValue)
 } 
 


 signin(formValue2:object):Observable<any>
 {
  return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin",formValue2)
 } 



 userLogin(){
  let token:any=localStorage.getItem("userToken");
  this.currentUser.next(jwtDecode(token));
 }

 logOut(){
   
   this.currentUser.next(null);
   localStorage.removeItem("userToken");
   this._Router.navigate(['/signin'])
 }

}
