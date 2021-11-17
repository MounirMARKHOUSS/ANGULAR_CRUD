import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joueur1',
  templateUrl: './joueur1.component.html',
  styleUrls: ['./joueur1.component.css']
})
export class Joueur1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirect() {

    this.router.navigate(['/joueur/form']);

  }

}
