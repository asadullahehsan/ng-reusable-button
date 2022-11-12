import { MyButton } from './../MyButton';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input('info') buttonInfo!: MyButton;
  @Output('display') displayEvent = new EventEmitter<MyButton>();

  displayInfo(value: MyButton) {
    this.displayEvent.emit(value);
  }
}
