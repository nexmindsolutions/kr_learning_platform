import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: "1st div",
    };
    this.slides[1] = {
      src: "2nd div"
    }
    this.slides[2] = {
      src: "3rd div"
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
