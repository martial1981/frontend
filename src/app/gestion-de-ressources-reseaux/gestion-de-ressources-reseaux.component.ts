import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-gestion-de-ressources-reseaux',
  templateUrl: './gestion-de-ressources-reseaux.component.html',
  styleUrls: ['./gestion-de-ressources-reseaux.component.css']
})
export class GestionDeRessourcesReseauxComponent implements OnInit {
  

  constructor(public authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  
   onVlanClick(){
    this.router.navigateByUrl('/vlan-form');
    
  } 
  onDashboardAdminClick(){
  
     this.router.navigateByUrl('/dasboard-admin');
  }
  
}
