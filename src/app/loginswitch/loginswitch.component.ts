import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-loginswitch',
  templateUrl: './loginswitch.component.html',
  styleUrls: ['./loginswitch.component.css']
})
export class LoginswitchComponent implements OnInit {

  public result :any={};
  public user :any={};
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }
onLoginswitch(user){
      this.authService.loginswitch()
    .subscribe(resp=>{
      
this.result=resp;    

            
 this.authService.saveSwitchCookie(this.result);
      this.router.navigateByUrl('/tasks');
      
    },err=>{
      
      
    }
    
    
    
    
    
    )
  
}
  }

