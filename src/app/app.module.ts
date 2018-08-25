import { AuthenticationService } from "../services/authentication.service";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ToastrModule } from 'ngx-toastr';

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
import { GestionDesUtilisateursComponent } from './gestion-des-utilisateurs/gestion-des-utilisateurs.component';
import { CreationDesUtilisateursComponent } from './creation-des-utilisateurs/creation-des-utilisateurs.component';
import { SupressionDesUtilisateursComponent } from './supression-des-utilisateurs/supression-des-utilisateurs.component';
import { ConsultationDesUtilisateursComponent } from './consultation-des-utilisateurs/consultation-des-utilisateurs.component';
import { AttributionDesRolesComponent } from './attribution-des-roles/attribution-des-roles.component';
import { ModifictaionDesUtilisateurEtDesRolesComponent } from './modifictaion-des-utilisateur-et-des-roles/modifictaion-des-utilisateur-et-des-roles.component';
import { GestionDesTicketsComponent } from './gestion-des-tickets/gestion-des-tickets.component';
import { CreationDesTicketsComponent } from './creation-des-tickets/creation-des-tickets.component';
import { ModificationDesTicketsComponent } from './modification-des-tickets/modification-des-tickets.component';
import { ClotureDesTicketsComponent } from './cloture-des-tickets/cloture-des-tickets.component';
import { ConsultationDesTicketsComponent } from './consultation-des-tickets/consultation-des-tickets.component';
import { GestionDeLaConfigurationDesEquipementsComponent } from './gestion-de-la-configuration-des-equipements/gestion-de-la-configuration-des-equipements.component';
import { BackupDeLaConfigurationComponent } from './backup-de-la-configuration/backup-de-la-configuration.component';
import { RestaurationDeLaConfigurationComponent } from './restauration-de-la-configuration/restauration-de-la-configuration.component';
import { SuprissionDeLaConfigurationComponent } from './suprission-de-la-configuration/suprission-de-la-configuration.component';
import { RoutinesTestTroubelshootComponent } from './routines-test-troubelshoot/routines-test-troubelshoot.component';
import { RoutinesTestPingComponent } from './routines-test-ping/routines-test-ping.component';
import { RoutinesTestTracertComponent } from './routines-test-tracert/routines-test-tracert.component';
import { RoutinesTestSaveRapportComponent } from './routines-test-save-rapport/routines-test-save-rapport.component';
import { RoutinesTestSubmitRapportComponent } from './routines-test-submit-rapport/routines-test-submit-rapport.component';
import { VlanComponent } from './vlan/vlan.component';
import { SysnameComponent } from './sysname/sysname.component';
import { VlanListComponent } from './vlan-list/vlan-list.component';
import { VlanFormComponent } from './vlan-form/vlan-form.component';

const appRoutes:Routes=[
{path:"login",component:LoginComponent},
{path:"tasks",component:TasksComponent},
{path:"new-task",component:NewTaskComponent},
{path:"register",component:RegistrationComponent},
{path:"gestion-de-ressources-reseaux",component:GestionDeRessourcesReseauxComponent},
{path:"gestion-des-utilisateurs",component:GestionDesUtilisateursComponent },
{path:"gestion-des-tickets",component:GestionDesTicketsComponent },
{path:"gestion-de-la-configuration-des-equipements",component:GestionDeLaConfigurationDesEquipementsComponent },
{path:"routines-test-troubelshoot",component:RoutinesTestTroubelshootComponent },
{path:"vlan",component:VlanComponent},
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
    DasboardAdminComponent,
    GestionDesUtilisateursComponent,
    CreationDesUtilisateursComponent,
    SupressionDesUtilisateursComponent,
    ConsultationDesUtilisateursComponent,
    AttributionDesRolesComponent,
    ModifictaionDesUtilisateurEtDesRolesComponent,
    GestionDesTicketsComponent,
    CreationDesTicketsComponent,
    ModificationDesTicketsComponent,
    ClotureDesTicketsComponent,
    ConsultationDesTicketsComponent,
    GestionDeLaConfigurationDesEquipementsComponent,
    BackupDeLaConfigurationComponent,
    RestaurationDeLaConfigurationComponent,
    SuprissionDeLaConfigurationComponent,
    RoutinesTestTroubelshootComponent,
    RoutinesTestPingComponent,
    RoutinesTestTracertComponent,
    RoutinesTestSaveRapportComponent,
    RoutinesTestSubmitRapportComponent,
    VlanComponent,
    SysnameComponent,
    VlanListComponent,
    VlanFormComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes) ,FormsModule,HttpClientModule,ToastrModule.forRoot()
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
