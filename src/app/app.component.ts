import { Component } from '@angular/core';
import { MyButton } from './MyButton';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My app';
  yesButton: MyButton;
  noButton: MyButton;
  maybeButton: MyButton;

  constructor() {
    this.yesButton = {
      label: 'Yes',
      fontColor: 'white',
      backgroundColor: 'blue',
    };
    this.maybeButton = {
      label: 'Maybe',
      fontColor: 'black',
      backgroundColor: 'yellow',
    };
    this.noButton = {
      label: 'No',
      fontColor: 'white',
      backgroundColor: 'red',
    };
  }

  displayInfo(info: MyButton) {
    alert(`${info.label} ${info.fontColor} ${info.backgroundColor}`);
  }
}
