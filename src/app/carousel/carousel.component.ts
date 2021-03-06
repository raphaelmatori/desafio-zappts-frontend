import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {

  // carouselArray: Array<any> = [{id: 0},{id: 1},{id: 2}];
  carouselArray: Array<any> = [{id: 0}];

  constructor() { }

  ngOnInit(): void {
  }

}
