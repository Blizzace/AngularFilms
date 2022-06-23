import { Component, NgModule, OnInit } from '@angular/core';
import { AddOrEditFilmComponent,Film } from './add-or-edit-film/add-or-edit-film.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit() {

  }
  films: Film[] = []
 addorupdatefilm(film: Film){
  this.films.push(film);
 }

  title = 'MyCine';
}
