import { Component, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() loading: boolean = false;

  @Output() onClick = new EventEmitter()

  @HostListener('click')
  click() {
    if(!this.loading){
      this.onClick.emit()
    }
  }
}
