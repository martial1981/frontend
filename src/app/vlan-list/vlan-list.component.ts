import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-vlan-list',
  templateUrl: './vlan-list.component.html',
  styleUrls: ['./vlan-list.component.css']
})
export class VlanListComponent implements OnInit {
  vlans;

  constructor(public authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.authService.getVlans()
    .subscribe(data=>{
      this.vlans=data;
      
      
    }, err=>{
      this.authService.logout();
      this.router.navigateByUrl('/login')
      
    })
  }

}
