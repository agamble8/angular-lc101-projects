import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'true-gifs',
  templateUrl: './true-gifs.component.html',
  styleUrls: ['./true-gifs.component.css']
})
export class TrueGifsComponent implements OnInit {
  img1: string = 'https://media.giphy.com/media/2uxxXyTRFgIJaOZJTb/giphy.gif';
  constructor() { }

  ngOnInit() {
  }

}
