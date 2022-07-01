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
    // console.log('When this component has loaded');
    window.addEventListener('incrementAngular', this.incrementValue, true);
  }
  ngOnDestroy(): void {
    window.removeEventListener('incrementAngular', this.incrementValue, true);
  }
  incrementValue = (event: any): void => {
    console.log('I am listening in Angular this: ', event?.detail);
    this.counter++;
  };

  // Example Angular to React
  // Publisher
  sendMessage(value: string) {
    const event = new CustomEvent('incrementReact', {
      detail: 'sended from Angular...',
    });
    window.dispatchEvent(event);
  }
}
