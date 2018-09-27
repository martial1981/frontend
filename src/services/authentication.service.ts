
import { HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {JwtHelper} from 'angular2-jwt';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()

export class AuthenticationService{
  private host:string="http://localhost:8080";
   private host1:string="http://10.10.10.1/rest/v1";

  
  private jwtToken=null;
  private cookieToken=null;
  private roles:Array<any>;
   public result :any={};
  constructor(private http:HttpClient){
    
  }
  login(user){
    
    return  this.http.post(this.host+"/login",user,{observe:'response'});
  }
  loginswitch(){
    
    return  this.http.post(this.host1+"/login-sessions",{"userName":"admin","password":"admin"});
  }
  saveSwitchCookie(jwt:string){
    this.cookieToken=jwt;
    localStorage.setItem('cookie',jwt);
    
    }
  /*loginswitch(user){
    
    return  this.http.post(this.host1+"/login-sessions",user,{observe:'response'});
  }
  
  saveToken(jwt:string){
    this.jwtToken=jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper=new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
    
}
  /*  saveSwitchCookie(jwt:string){
    this.cookieToken=jwt;
    localStorage.setItem('cookie',jwt);
    
    }
  
   loadSwitchCookie(){
   this.cookieToken=localStorage.getItem('cookie');
 }*/
  
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
    saveVlan(vlan: any):Observable<any>{
    return this.http.post(this.host+"/vlan",vlan,{headers:new HttpHeaders({ 'Authorization':this.jwtToken})});
    
  }
    
  getVlans():Observable<any>{
    if (this.jwtToken==null)this.loadToken();
    return this.http.get(this.host+"/vlan",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  //fromthe switch
    getVlansSwitch():Observable<any>{
    if (this.jwtToken==null)this.loadToken();
    return this.http.get(this.host1+"/vlans");
  }

 //systemes info from the switch
    getSystemsinfo():Observable<any>{
    if (this.jwtToken==null)this.loadToken();
    return this.http.get(this.host1+"/system/status");
  }
    editVlan(id :any):Observable<any>{
    if (this.jwtToken==null)this.loadToken();
    return this.http.get(this.host+"/vlan/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  } 
   update(vlan: any):Observable<any>{
    return this.http.post(this.host+"/updatevlan",vlan,{headers:new HttpHeaders({ 'Authorization':this.jwtToken})});
    
  }
  erase(id :any):Observable<any>{
    if (this.jwtToken==null)this.loadToken();
    return this.http.delete(this.host+"/vlan/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  } 
  
  saveUser(user: any):Observable<any>{
    return this.http.post(this.host+"/register",user)
    .catch(this.errorHandler);
  
 }
  
  errorHandler(error:HttpErrorResponse ){
    
    return Observable.throw(error.message||"Server Error");
  }
  
   getUsers():Observable<any>{
    if (this.jwtToken==null)this.loadToken();
    return this.http.get(this.host+"/user",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  editUser(id :any):Observable<any>{
    if (this.jwtToken==null)this.loadToken();
    return this.http.get(this.host+"/user/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  } 
   updateUser(user: any):Observable<any>{
    return this.http.post(this.host+"/promotetoadmin",user,{headers:new HttpHeaders({ 'Authorization':this.jwtToken})});
    
  }
  saveBusinessCase(businesscase: any):Observable<any>{
    return this.http.post(this.host+"/businesscase",businesscase,{headers:new HttpHeaders({ 'Authorization':this.jwtToken})});
    
  }
   getBusinessCase():Observable<any>{
    if (this.jwtToken==null)this.loadToken();
    return this.http.get(this.host+"/businesscase",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  
  editBusinessCase(casenumber :any):Observable<any>{
    if (this.jwtToken==null)this.loadToken();
    return this.http.get(this.host+"/businesscase/"+casenumber,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  } 
  eraseBusinessCase(casenumber :any):Observable<any>{
    if (this.jwtToken==null)this.loadToken();
    return this.http.delete(this.host+"/delete/"+casenumber,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  } 
  
  updateBusinessCase(businesscase: any):Observable<any>{
    return this.http.post(this.host+"/updatebuisnesscase",businesscase,{headers:new HttpHeaders({ 'Authorization':this.jwtToken})});
    
  }
  
}
  
  
  
