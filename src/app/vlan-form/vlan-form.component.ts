import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
@Component({
  selector: 'app-vlan-form',
  templateUrl: './vlan-form.component.html',
  styleUrls: ['./vlan-form.component.css']
})
export class VlanFormComponent implements OnInit {
  public vlans : any=[];
  public vlan :any={};

  constructor(public authService:AuthenticationService,private toastr :ToastrService, private router:Router   ) { }

  ngOnInit() {
    this.getVlans();
      
  }
  
  getVlans(){
    
    this.authService.getVlans()
    .subscribe(data=>{
      this.vlans=data;
      
      
    }, err=>{
     this.authService.logout();
      this.router.navigateByUrl('/login');
      
    })
    
  }
//  
//  onSaveTask(task){
//    this.authService.saveTask(task)
//     .subscribe(resp=>{
//       this.task=resp;
//       },err=>{console.log(err);
//     })
//    
//  }

  
  onSubmitvlan(vlan: any){
    this.authService.saveVlan(vlan)
    .subscribe(resp=>{
       this.vlans.push(resp);
      this.vlan={};
       },err=>{console.log(err);
    })
this.toastr.success('enregistrement réussi!','vlan enregistré');

  }
  RestForm(vlanForm? :NgForm){
    if (vlanForm !=null) 
    vlanForm.reset();
    
    
  }
  editvlan(id :any ){
    this.authService.editVlan(id)
    .subscribe(resp=>{
       
      this.vlan=resp;
       },err=>{console.log(err);
    })
  }
    deletevlan(id :any ){
    this.authService.erase(id)
      .subscribe(resp=>{
       
       this.getVlans();
      this.vlan={};
       },err=>{console.log(err);
    })
  }
  
  
  
     update(vlan :any){
    this.authService.update(vlan)
    .subscribe(resp=>{
       this.getVlans();
      this.vlan={};
       },err=>{console.log(err);
    })
this.toastr.success('Mise à jour réussite !','vlan Mis à jour ');

  }
  
  
 

}
