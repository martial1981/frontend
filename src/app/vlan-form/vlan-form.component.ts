import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vlan-form',
  templateUrl: './vlan-form.component.html',
  styleUrls: ['./vlan-form.component.css']
})
export class VlanFormComponent implements OnInit {
  vlan : any ;

  constructor(public authService:AuthenticationService,private toastr :ToastrService   ) { }

  ngOnInit() {
    this.RestForm();
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

  
  onSubmitvlan(vlanForm: NgForm){
    this.authService.saveVlan(vlanForm)
    .subscribe(resp=>{
       this.vlan=resp;
       },err=>{console.log(err);
    })
this.toastr.success('enregistrement réussi!','vlan enregistré');

  }
  RestForm(vlanForm? :NgForm){
    if (vlanForm !=null) 
    vlanForm.reset();
    
    
  }

}
