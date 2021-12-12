import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class EquipeService {
    equipes: any[] = [];
    editMode = false;
    URL = 'http://localhost:8086//apiEquipes';


    constructor(private http: HttpClient) {


    }
    add(equipe: any) {

        return this.http.post(this.URL + '/save', equipe, { observe: 'response' });
    }
    update(equipe: any) {

        return this.http.put(this.URL + '/update', equipe, { observe: 'response' });
    }
    findAll() {

        return this.http.get<any[]>(this.URL + '/getAll').pipe(map(value => this.equipes = value));
    }
    delete(id: any) {

        return this.http.delete(this.URL + '/delete/' + id);

    }

    getOne(id: any) {

        return this.http.get<any>(this.URL + '/get/' + id);

    }

}