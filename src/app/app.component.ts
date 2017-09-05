import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  name: string = 'Angular2';

  setName(newName: string) {
    this.name = newName;
  }
}
