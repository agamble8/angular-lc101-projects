import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cute Pic of the Day';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'assets/lola1.jpg';
  image3 = 'https://i.pinimg.com/originals/f3/bd/84/f3bd8497e15399201b634714ec5ed390.jpg';

  constructor() { }

  ngOnInit() {
  }

}