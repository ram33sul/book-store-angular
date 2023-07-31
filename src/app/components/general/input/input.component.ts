import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() type: string = 'text'
  
  @Input() value: string = '';
  @Output() onChange = new EventEmitter()
}
