import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
    <div>
      <h1>子组件</h1>
      <p>嘿嘿，我从父组件获取的值是：{{ message }}</p>
      <button (click)="sendToParent()">发送到父组件</button>
    </div>
  `,
  styles:[
    `div {
      border:1px solid #ccc;
      border-radius:5px;
      background-color:#70A1D7;
      padding: 10px;
      margin: 20px 0;
    }`
  ]
})
export class ChildComponent {
  @Input() private message: string;
  @Output() private outer = new EventEmitter<string>();
	constructor() {	}
  
  sendToParent() {
    this.outer.emit('message from child');
  }
}
