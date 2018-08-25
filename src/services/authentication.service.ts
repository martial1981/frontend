
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {JwtHelper} from 'angular2-jwt';
@Injectable()

export class AuthenticationService{
  private host:string="http://localhost:8080";
  private jwtToken=null;
  private roles:Array<any>;
  constructor(private http:HttpClient){
    
  }
  login(user){
    
    return  this.http.post(this.host+"/login",user,{observe:'response'});
  }
  
  saveToken(jwt:string){
    this.jwtToken=jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper=new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
    
    
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
 
 isAdmin(){
   for ( let r of this.roles){
     if (r.authority=='ADMIN') return true ;
   }
   return false ;
   
 }
  isUser(){
   for ( let r of this.roles){
     if (r.authority=='USER') return true ;
   }
   return false ;
   
 }
  
  saveTask(task){
    return this.http.post(this.host+"/tasks",task,{headers:new HttpHeaders({ 'Authorization':this.jwtToken})});
    
  }
    saveVlan(vlan){
    return this.http.post(this.host+"/vlan",vlan,{headers:new HttpHeaders({ 'Authorization':this.jwtToken})});
    
  }
    
  getVlans(){
    if (this.jwtToken==null)this.loadToken();
    return this.http.get(this.host+"/vlan",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
}