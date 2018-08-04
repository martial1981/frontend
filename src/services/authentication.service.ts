
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()

export class AuthenticationService{
  private host:string="http://localhost:8080";
  private jwtToken=null;
  
  constructor(private http:HttpClient){
    
  }
  login(user){
    
    return  this.http.post(this.host+"/login",user,{observe:'response'});
  }
  
  saveToken(jwt:string){
    localStorage.setItem('token',jwt);
    
    
    
  }
  loadToken(){
   this.jwtToken=localStorage.getItem('token');
 }
  
  getTasks(){
    if (this.jwtToken==null)this.loadToken();
    return this.http.get(this.host+"/tasks",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
 logout(){
   this.jwtToken=null;
   localStorage.removeItem('token');
 }
 
  
  
}