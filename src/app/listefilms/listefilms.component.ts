import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Film } from '../add-or-edit-film/add-or-edit-film.component';
import { FilmService } from '../film.service';
@Component({
  selector: 'app-listefilms',
  templateUrl: './listefilms.component.html',
  styleUrls: ['./listefilms.component.css']
})
export class ListefilmsComponent implements OnInit {

  @Input() films!: Film[];

  constructor( private filmService: FilmService) {   }
 
  ngOnInit(): void {
    this.filmService.Getfilms().subscribe(films =>{
      console.warn(films)
      this.films = films;
    })
  }

}