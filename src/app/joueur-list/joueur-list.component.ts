import { Component, OnInit } from '@angular/core';
import { JoueurService } from 'src/service/Joueur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joueur-list',
  templateUrl: './joueur-list.component.html',
  styleUrls: ['./joueur-list.component.css']
})
export class JoueurListComponent implements OnInit {
  joueurs: any[] = [];
  constructor(private joueurService: JoueurService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {

    this.joueurService.findAll().subscribe(
      (value: any[]) => {
        this.joueurs = value;
      }


    );


  }
  delete(id, index) {

    this.joueurService.delete(id).subscribe(response => { this.joueurs.splice(index, 1); }



    );


  }

  edit(id) {

    this.router.navigate(['/joueur/edit', id]);
    this.joueurService.editMode = true;


  }


}
