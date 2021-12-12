import { EquipeService } from 'src/service/Equipe.service';
 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueurService } from 'src/service/Joueur.service';
import { JoueurListComponent } from './joueur-list/joueur-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Joueur1Component } from './joueur1/joueur1.component';
import { JoueurFrmComponent } from './joueur-frm/joueur-frm.component';
import { EquipeComponent } from './equipe/equipe.component';
import { EquipeFrmComponent } from './equipe-frm/equipe-frm.component';
import { EquipeListComponent } from './equipe-list/equipe-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,

    JoueurFrmComponent,
    JoueurListComponent,
    Joueur1Component,
    EquipeComponent,
    EquipeFrmComponent,
    EquipeListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [JoueurService,EquipeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
