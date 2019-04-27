import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.scss']
})
export class UserCountComponent implements OnInit {

  @Input()
  allCount = 10;
  @Input()
  maleCount = 5;
  @Input()
  femaleCount = 5;

  selectedRadioButtonValue = 'all';

  @Output()
  selectedRadioButtonValueChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange() {
    this.selectedRadioButtonValueChanged.emit(this.selectedRadioButtonValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
