import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  task :any;

  constructor(public authService:AuthenticationService) { }

  ngOnInit() {
  }
  
  onSaveTask(task){
    this.authService.saveTask(task)
     .subscribe(resp=>{
       this.task=resp;
       },err=>{console.log(err);
     })
    
  }

}
