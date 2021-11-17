import { EquipeService } from 'src/service/Equipe.service';
import { JoueurService } from 'src/service/Joueur.service';
 
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-joueur-frm',
  templateUrl: './joueur-frm.component.html',
  styleUrls: ['./joueur-frm.component.css']
})
export class JoueurFrmComponent implements OnInit {
  id: any;
  form: FormGroup;
  mode: any;
  joueur: any;
  equipes: any[] = [];
  constructor(private joueurService: JoueurService, private equipeService:EquipeService ,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      nom: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      prenom: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      jeu: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      poids: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      taille: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      equipe: new FormControl()
    });
    this.mode = this.joueurService.editMode;

    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = param['id'];
      if (this.id) {
        this.joueurService.getOne(this.id).subscribe(response => {
          this.form.setValue(response);
        }
        );
      }
    }
    )
    this.findAllEquipes();
  }
  save() {

    this.joueurService.add(this.form.value)
      .subscribe(response => {
        this.joueurService.joueurs.push(response.body);
        this.form.reset();
      }
      );
  }

  findIndexWithId(item) {

    return item.id === this;

  }
  update() {

    this.joueurService.update(this.form.value).subscribe((response: any) => {

      this.joueur = this.joueurService.joueurs
        .find(this.findIndexWithId, response.body.id);
      const index = this.joueurService.joueurs.indexOf(this.joueur);
      console.log(index)
      this.joueurService.joueurs.splice(index, 1, response.body);


    });

    this.joueurService.editMode = false;
    this.router.navigate(['/joueur/form'])

  }

  findAllEquipes(){

this.equipeService.findAll().subscribe(

(value:any[])=>{

  this.equipes = value;

}

);

  }

}


