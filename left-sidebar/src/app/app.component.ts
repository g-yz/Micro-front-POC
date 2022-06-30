import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'left-sidebar';

  constructor() {}
  // Example React to Angular
  // Listener
  ngOnInit(): void {
    console.log('When this component has loaded');
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (event: any): void => {
    console.log('I am listening this : ', event?.detail);
  };

  // Example Angular to React
  // Publisher
  sendMessage(value: string) {
    const event = new CustomEvent('addToCart', { detail: 'new conv...' });
    window.dispatchEvent(event);
  }
}
