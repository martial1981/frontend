import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sysname',
  templateUrl: './sysname.component.html',
  styleUrls: ['./sysname.component.css']
})
export class SysnameComponent implements OnInit {
public sysnames : any=[];
 public sysname :any={};

  constructor(public authService:AuthenticationService,private toastr :ToastrService, private router:Router) { }

  ngOnInit() {

this.authService.getSystemsinfo()
    .subscribe(data=>{
      this.sysnames=data;
      
      
    }, err=>{
     this.authService.logout();
      this.router.navigateByUrl('/login');
      
    })
  }

}
