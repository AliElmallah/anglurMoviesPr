import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})





export class SigninComponent implements OnInit {


  errror:string='';
  constructor(private _AuthService:AuthService,private _Router:Router) { }



  FormGroup2 = new FormGroup({
    email : new FormControl(null, [Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9]{3,10}$")])
  });



  formGroupData2(form2:FormGroup){
    this._AuthService.signin(form2.value).subscribe((respose)=>{
      if(respose.message == 'success'){
        localStorage.setItem("userToken",respose.token);
        this._AuthService.userLogin();
        this._Router.navigate(['/home']);

      }else{
        this.errror=respose.message;
      }

    })
  }




  ngOnInit(): void {
  }

}
