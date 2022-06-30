import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'left-sidebar';

  sendMessage(value: string) {
    const event = new CustomEvent('addToCart', { detail: 'new conv...' });
    window.dispatchEvent(event);
    // alert('works' + value);
  }
}
