import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number=0;

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    
  }
  onLogin(user){
    this.authService.login(user)
    .subscribe(resp=>{
      let jwt=resp.headers.get('Authorization');
      console.log(resp.headers.get('Authorization'));
      
      
    },err=>{
      this.mode=1;
      
    }
    
    
    
    
    
    )
    
  }

}

