import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World';
  showText = false;
  todaysDate = new Date();

  toggleText(event): void {
    this.showText = !this.showText;
    console.log(event);
  }

  getMin(a, b) {
    if (a < b) return a;

    return b;
  }
}
