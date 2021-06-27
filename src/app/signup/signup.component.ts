import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errror:string='';
  FormGroup1 = new FormGroup({
    first_name : new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(10) ]),
    last_name : new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(10) ]),
    age : new FormControl(null,[Validators.required, Validators.min(16),Validators.max(80) ]),
    email : new FormControl(null, [Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9]{3,10}$")])
  });
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  formGroupData(form1:FormGroup){
    this._AuthService.signup(form1.value).subscribe((respose)=>{

      if(respose.message == 'success'){
        this._Router.navigate(['/signin'])
      }else{

        this.errror=respose.errors.email.message;

      }

    })
  }

  ngOnInit(): void {
  }

}
