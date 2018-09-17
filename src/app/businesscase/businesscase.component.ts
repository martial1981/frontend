import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { ToastrService } from 'ngx-toastr';

import { Router } from "@angular/router";

@Component({
  selector: 'app-businesscase',
  templateUrl: './businesscase.component.html',
  styleUrls: ['./businesscase.component.css']
})
export class BusinesscaseComponent implements OnInit {
  public businesscase :any={};
  public businesscases : any=[];

  constructor(public authService:AuthenticationService,private toastr :ToastrService, private router:Router) { }

  ngOnInit() {
  }

  
  RestForm(BusinessForm? :NgForm){
    if (BusinessForm !=null) 
    BusinessForm.reset();
    
    
  }
  
   onSubmitbusinesscase(businesscase: any){
    this.authService.saveBusinessCase(businesscase)
    .subscribe(resp=>{
       this.businesscases.push(resp);
      this.businesscase={};
      this.toastr.success('enregistrement réussi!','enregistré');
       },err=>{console.log(err);
    })


  }
  
  
  
}
