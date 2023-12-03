import { Component } from '@angular/core';
import { Slide } from './model/slide.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-image-slider';

  slides: Slide[] = [
    { url: 'https://picsum.photos/id/231/700/400', title: 'Image slide 1' },
    { url: 'https://picsum.photos/id/232/700/400', title: 'Image slide 2' },
    { url: 'https://picsum.photos/id/233/700/400', title: 'Image slide 3' },
    { url: 'https://picsum.photos/id/234/700/400', title: 'Image slide 4' },
    { url: 'https://picsum.photos/id/235/700/400', title: 'Image slide 5' },
  ]



}
