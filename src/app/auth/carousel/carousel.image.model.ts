export class CarouselImage {
  public id: number;
  public title: string;
  public description: string;
  public imagePath: string;

  constructor(id: number, title: string, description: string, imagePath: string,) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
  }
}
