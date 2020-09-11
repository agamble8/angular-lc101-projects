import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Serenity', 'Harry Potter and the Goblet of Fire', 'The Princess Bride', 'A Wrinkle In Time'];

   constructor() { }

   ngOnInit() {
   }

}
