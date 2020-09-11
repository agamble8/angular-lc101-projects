import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title = "Handy Links";
  favLinks =  ['github.com', 'repl.it', 'amazon.com'];
  constructor() { }

  ngOnInit() {
  }

}
