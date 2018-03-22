import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input('show') show: boolean;
  constructor() { }

  buttonClick() {
    console.log('button clicked');
  }
}
