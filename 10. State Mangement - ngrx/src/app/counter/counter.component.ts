import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  countBy: number = 1;
  count: number = 0;

  incClicked() {
    this.count = this.count + this.countBy;
  }

  decClicked() {
    this.count -= this.countBy;
  }

}
