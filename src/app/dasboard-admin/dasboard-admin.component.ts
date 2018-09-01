import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasboard-admin',
  templateUrl: './dasboard-admin.component.html',
  styleUrls: ['./dasboard-admin.component.css']
})
export class DasboardAdminComponent implements OnInit {
    vlans : any=[];
  vlan :any={};
  
  dataVlanParType  = {
  labels: [],
  datasets:[]
  
  
  };
    
   dataVlanParName = {
  labels: [],
  datasets:[]
  
  
  };


  constructor(private  authService:AuthenticationService) { }
  

  ngOnInit() {
      
  
    
        const datasetsVlanName ={
      label:"Vlan Qos",
      data: []
    };
    
    this.authService.getVlans().subscribe(list=>list.forEach(vlan =>{
      this.dataVlanParType.labels.push(vlan.id)
 
      datasetsVlanName.data.push(vlan.qos);
           
    }));
    
    
   //this.dataVlanParType.datasets.push(datasetsVlanType);
  
    this.dataVlanParType.datasets.push(datasetsVlanName);
   
  }


}
