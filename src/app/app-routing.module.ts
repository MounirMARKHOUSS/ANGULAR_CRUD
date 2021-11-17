import { EquipeFrmComponent } from './equipe-frm/equipe-frm.component';
import { EquipeComponent } from './equipe/equipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Joueur1Component } from './joueur1/joueur1.component';
import { JoueurFrmComponent } from './joueur-frm/joueur-frm.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/joueur', pathMatch: 'full' },
  { path: '', redirectTo: '/equipe', pathMatch: 'full' },
   {
    path: 'joueur', component: Joueur1Component, children: [
      { path: 'form', component: JoueurFrmComponent },
      { path: 'edit/:id', component: JoueurFrmComponent }
    ]
  },
  {
  path: 'equipe', component: EquipeComponent , children: [
      { path: 'form', component: EquipeFrmComponent  },
      { path: 'edit/:id', component: EquipeFrmComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
