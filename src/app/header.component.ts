import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styles: ['h1{ color: aqua; }']
})
export class HeaderComponent {
  constructor() {}

  // name: string = 'Angular2';

  @Input() name: string;
  @Output() onNameChanged =  new EventEmitter<string>();

  changeName(newName: string) {
    this.onNameChanged.emit(newName);
  }
}
