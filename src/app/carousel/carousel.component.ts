import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CarouselImage } from './carousel.image.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {

  //TODO: Inject those values from Input
  carouselArray: Array<CarouselImage> = [
    new CarouselImage(1,"Marcenas mattis egestas","Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.","assets/images/1.png"),
    new CarouselImage(2,"Marcenas mattis egestas","Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.","assets/images/2.svg"),
    new CarouselImage(3,"Marcenas mattis egestas","Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.","assets/images/3.svg"),
    new CarouselImage(4,"Marcenas mattis egestas","Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.","assets/images/4.svg"),
    new CarouselImage(5,"Marcenas mattis egestas","Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.","assets/images/5.svg"),
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
