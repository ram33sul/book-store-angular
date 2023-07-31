import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-two',
  templateUrl: './button-two.component.html',
  styleUrls: ['./button-two.component.css']
})
export class ButtonTwoComponent {
  @Output() onClick = new EventEmitter()

  @HostListener('click')
  click() {
    this.onClick.emit()
  }
}
