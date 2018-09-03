import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   public users : any=[];
  public user :any={};

  constructor() { }

  ngOnInit() {
  }
  ResetFormRegister(registerForm? :NgForm){
    if (registerForm !=null) 
    registerForm.reset();
    
    
  }
  onSubmitUser(user :any){
    
  }
  UpdateUser(user :any){
    
  }
}
