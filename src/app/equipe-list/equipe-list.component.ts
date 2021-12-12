import { EquipeService } from './../../service/Equipe.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
 
 
@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {
equipes: any[] = [];
  constructor(private equipeService: EquipeService  , private router: Router) { }

  ngOnInit() {
    this.findAll();
  }
  findAll() {

    this.equipeService.findAll().subscribe(
      (value: any[]) => {
        this.equipes  = value;
      }


    );
  }
  delete(id, index) {

    this.equipeService.delete(id).subscribe(response => { this.equipes.splice(index, 1); }



    );


  }

  edit(id) {

    this.router.navigate(['/equipe/edit', id]);
    this.equipeService.editMode = true;


  }




}
