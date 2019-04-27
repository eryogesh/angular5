import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.scss']
})
export class UserCountComponent implements OnInit {

  @Input()
  allCount: number = 10;
  @Input()
  maleCount: number = 5;
  @Input()
  femaleCount: number = 5;

  selectedRadioButtonValue: string = 'all';

  @Output()
  selectedRadioButtonValueChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange() {
    this.selectedRadioButtonValueChanged.emit(this.selectedRadioButtonValue);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
