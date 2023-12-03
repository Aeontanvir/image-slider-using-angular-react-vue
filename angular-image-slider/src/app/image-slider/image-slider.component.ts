import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../model/slide.model';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit{

  @Input()
  slides!: Slide[];

  currentIndex: number = 0;

  ngOnInit(): void {
  }

  onPrevious() {
    const isFirstIndex = this.currentIndex === 0;
    this.currentIndex = isFirstIndex ? this.slides.length -1: this.currentIndex -1;
  }
  onNext() {
    const isLastIndex = this.currentIndex === this.slides.length - 1;
    this.currentIndex = isLastIndex ? 0 : this.currentIndex + 1;
  }

  onIndex(index: number) {
    this.currentIndex = index;
  }

}
