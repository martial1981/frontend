
import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: 'app-gestion-des-utilisateurs',
  templateUrl: './gestion-des-utilisateurs.component.html',
  styleUrls: ['./gestion-des-utilisateurs.component.css']
})
export class GestionDesUtilisateursComponent implements OnInit {
     public users : any=[];
  public user :any={};
    public errorMsg=[] ;
  public message;
  mode1:number=0;

  constructor(public authService:AuthenticationService,private toastr :ToastrService, private router:Router) { }

  ngOnInit() {
        this.authService.getUsers()
    .subscribe(data=>{
      this.users=data;
      
      
    }, err=>{
     this.authService.logout();
      this.router.navigateByUrl('/login');
      
    })
  }
  
  
 
    editUser(id :any ){
    this.authService.editUser(id)
    .subscribe(resp=>{
       
      this.user=resp;
       },err=>{console.log(err);
    })
  }
  
  
       UpdateUser(user :any){
    this.authService.updateUser(user)
    .subscribe(resp=>{
        this.users=resp;
       },err=>{console.log(err);
    })
this.toastr.success('Mise à jour réussite !','vlan Mis à jour ');

  }
    

    
  
  
  
  
   onSubmitUserAdmin(user :any){
     
    this.authService.saveUser(user)
   
    .subscribe(resp=>{
       this.users.push(resp);
      this.user={};
      this.toastr.success('enregistrement réussi!','User enregistré');
       },err=>{this.errorMsg = err;
         this.mode1=1;
      }
    );

}}
