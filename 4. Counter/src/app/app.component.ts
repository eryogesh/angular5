import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  flag = true;
  message = 'Hello World';

  change() {
    this.message = 'Changed world';
  }


}
