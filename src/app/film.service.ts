import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './add-or-edit-film/add-or-edit-film.component';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: Film[]=[]
  jsonservurl = "http://localhost:3000"

  constructor(private _httpClient: HttpClient) { }
  Addfilm(){}
  Getfilms(){ return this._httpClient.get<Film[]>(`http://localhost:3000/films`);
    
  }
  Editfilm(){}
  Suppfilm(){}
}
