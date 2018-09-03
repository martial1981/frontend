import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vlan',
  templateUrl: './vlan.component.html',
  styleUrls: ['./vlan.component.css']
})
export class VlanComponent implements OnInit {
 public vlans : any=[];
  public vlan :any={};
  constructor(public authService:AuthenticationService,private toastr :ToastrService, private router:Router ) { }

  ngOnInit() {
    this.authService.getVlansSwitch()
    .subscribe(data=>{
      this.vlans=data;
      
      
    }, err=>{
     this.authService.logout();
      this.router.navigateByUrl('/login');
      
    })
    
  }
  
    
    
  }

  
    
    
 
  

