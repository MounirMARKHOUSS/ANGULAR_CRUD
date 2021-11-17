import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class JoueurService {
    joueurs: any[] = [];
    editMode = false;
    URL = 'http://localhost:8096//apiJoueurs';


    constructor(private http: HttpClient) {


    }
    add(joueur: any) {

        return this.http.post(this.URL + '/save', joueur, { observe: 'response' });
    }
    update(joueur: any) {

        return this.http.put(this.URL + '/update', joueur, { observe: 'response' });
    }
    findAll() {

        return this.http.get<any[]>(this.URL + '/getAll').pipe(map(value => this.joueurs = value));
    }
    delete(id: any) {

        return this.http.delete(this.URL + '/delete/' + id);

    }

    getOne(id: any) {

        return this.http.get<any>(this.URL + '/get/' + id);

    }

}