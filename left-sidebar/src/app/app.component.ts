import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  counter: number = 0;
  title = 'left-sidebar';

  constructor() {}
  // Example React to Angular
  // Subscriber
  ngOnInit(): void {
    console.log('When this component has loaded');
    window.addEventListener('incrementAngular', this.scroll, true);
  }
  ngOnDestroy(): void {
    window.removeEventListener('incrementAngular', this.scroll, true);
  }
  scroll = (event: any): void => {
    console.log('I am listening this : ', event?.detail);
    this.counter++;
  };

  // Example Angular to React
  // Publisher
  sendMessage(value: string) {
    const event = new CustomEvent('addToCart', { detail: 'from Angular...' });
    window.dispatchEvent(event);
  }
}
