import { AuthenticationService } from "../services/authentication.service";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule,Routes } from "@angular/router";
import { GestionDeRessourcesReseauxComponent } from './gestion-de-ressources-reseaux/gestion-de-ressources-reseaux.component';
import { CreationDeRessourcesComponent } from './creation-de-ressources/creation-de-ressources.component';
import { ModificationDeRessourcesComponent } from './modification-de-ressources/modification-de-ressources.component';
import { SupressionDeRessourcesComponent } from './supression-de-ressources/supression-de-ressources.component';
import { ConsultationDeRessourcesComponent } from './consultation-de-ressources/consultation-de-ressources.component';
import { AnyCliComponent } from './any-cli/any-cli.component';
import { DasboardAdminComponent } from './dasboard-admin/dasboard-admin.component';
const appRoutes:Routes=[
{path:"login",component:LoginComponent},
{path:"tasks",component:TasksComponent},
{path:"new-task",component:NewTaskComponent},
{path:"register",component:RegistrationComponent},
{path:"gestion-de-ressources-reseaux",component:GestionDeRessourcesReseauxComponent},
{path:"",redirectTo:"login",pathMatch:"full"},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    NewTaskComponent,
    RegistrationComponent,
    GestionDeRessourcesReseauxComponent,
    CreationDeRessourcesComponent,
    ModificationDeRessourcesComponent,
    SupressionDeRessourcesComponent,
    ConsultationDeRessourcesComponent,
    AnyCliComponent,
    DasboardAdminComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes) ,FormsModule,HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
