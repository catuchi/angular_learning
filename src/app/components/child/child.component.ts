import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();

  message = 'message from child!';

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit('Hello from child');
  }
}
