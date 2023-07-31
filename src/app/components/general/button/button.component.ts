import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter()

  @HostListener('click')
  click() {
    this.onClick.emit()
  }
}