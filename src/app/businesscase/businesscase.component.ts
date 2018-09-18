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
  this.getBusinessCase();
  
  }

  getBusinessCase(){
    
    this.authService.getBusinessCase()
    .subscribe(data=>{
      this.businesscases=data;
      
      
    }, err=>{
     this.authService.logout();
      this.router.navigateByUrl('/login');
      
    })
    
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
      this.toastr.success('enregistrement de Business Case réussi!','notfication de mail envoyé ');
       },err=>{console.log(err);
    })


  }
  
  editBusinessCase(casenumber :any ){
    this.authService.editBusinessCase(casenumber)
    .subscribe(resp=>{
       
      this.businesscase=resp;
       },err=>{console.log(err);
    })
  }
  deleteBusinessCase(casenumber :any ){
    this.authService.eraseBusinessCase(casenumber)
      .subscribe(resp=>{
       
       this.getBusinessCase();
      this.businesscase={};
        this.toastr.warning('supression enregistrement de Business Case réussi!','notfication de mail envoyé ');
       },err=>{console.log(err);
    })
  }
  update(businesscase :any){
    this.authService.updateBusinessCase(businesscase)
    .subscribe(resp=>{
      this.getBusinessCase();
      this.businesscase={};
       },err=>{console.log(err);
    })
this.toastr.success('Mise à jour réussite !','Business Case Mis à jour ');

  }
  
  
}
