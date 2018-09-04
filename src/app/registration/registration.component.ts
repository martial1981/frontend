import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   public users : any=[];
  public user :any={};
  public errorMsg=[] ;
  public message;
  mode1:number=0;
  constructor(public authService:AuthenticationService,private toastr :ToastrService, private router:Router ) { }

  ngOnInit() {
  }
  ResetFormRegister(registerForm? :NgForm){
    if (registerForm !=null) 
    registerForm.reset();
    this.mode1=0;
    
    
  }
  onSubmitUser(user :any){
     
    this.authService.saveUser(user)
   
    .subscribe(resp=>{
       this.users.push(resp);
      this.user={};
      this.toastr.success('enregistrement réussi!','User enregistré');
       },err=>{this.errorMsg = err;
         this.mode1=1;
      }
    );

    
    
  }
  UpdateUser(user :any){
    
  }
}
