import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      imports: [
        NgbModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a image with title and description text', () => {
    let image = fixture.debugElement.query(By.css('img.js-carouselImg')).nativeElement;
    let title = fixture.debugElement.query(By.css('.js-carouselTitle')).nativeElement;
    let description = fixture.debugElement.query(By.css('.js-carouselDescription')).nativeElement;
    expect(image).toBeTruthy();
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });
});
