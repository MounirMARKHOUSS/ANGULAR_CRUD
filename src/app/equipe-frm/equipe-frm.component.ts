import { JoueurService } from 'src/service/Joueur.service';
import { EquipeService } from './../../service/Equipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-equipe-frm',
  templateUrl: './equipe-frm.component.html',
  styleUrls: ['./equipe-frm.component.css']
})
export class EquipeFrmComponent implements OnInit {
id: any;
form: FormGroup;
mode: any;
equipe: any;
joueurs: any[] = [];
  constructor(private equipeService: EquipeService,private joueurService:JoueurService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      nom_equipe:new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      nombre_joueur :new FormControl(null, Validators.required)
     });
    this.mode = this.equipeService.editMode;

    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = param['id'];
      if (this.id) {
        this.equipeService.getOne(this.id).subscribe(response => {
          this.form.setValue(response);
        }
        );
       }

      }
    )
this.findAllJoueurs();
}
save() {

  this.equipeService.add(this.form.value)
    .subscribe(response => {
      this.equipeService.equipes.push(response.body);
      this.form.reset();
    }
    );
}
findIndexWithId(item) {

  return item.id === this;
}
update() {

  this.equipeService.update(this.form.value).subscribe((response: any) => {

    this.equipe = this.equipeService.equipes
      .find(this.findIndexWithId, response.body.id);
    const index = this.equipeService.equipes.indexOf(this.equipe);
    console.log(index)
    this.equipeService.equipes.splice(index, 1, response.body);


  });

  this.equipeService.editMode = false;
  this.router.navigate(['/equipe/form'])

}

findAllJoueurs(){

  this.joueurService.findAll().subscribe(
   (value: any[])=>{

    this.joueurs = value;
   }
   

  );

}

}