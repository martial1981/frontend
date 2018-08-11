import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;

  constructor(public authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.authService.getTasks()
    .subscribe(data=>{
      this.tasks=data;
      
      
    }, err=>{
      this.authService.logout();
      this.router.navigateByUrl('/login')
      
    })
  }
  onNewTask(){
      this.router.navigateByUrl('/new-task');
    
    
  }
   onGestionRessourcesReseaux(){
      this.router.navigateByUrl('/gestion-de-ressources-reseaux');
    
    
  }
  onGestionDesUtilisateurs(){
    this.router.navigateByUrl('/gestion-des-utilisateurs');
  }
  onGestionDesTickets(){
   this.router.navigateByUrl('/gestion-des-tickets');
  
  }
onGestionDesConfig(){
  this.router.navigateByUrl('/gestion-de-la-configuration-des-equipements');
  
}
  onRoutinesTroublehsoot(){
    this.router.navigateByUrl('/routines-test-troubelshoot');
    
  }
}
