import { Component, Input, Output, EventEmitter } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'my-child',
  template: `
    <div>
      <h1>子组件</h1>
      <p>嘿嘿，我从父组件获取的值是：{{ data }}</p>
      <input (change)="inputData=$event.target.value">
      <button (click)="sendToParent()">发给父组件</button>
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
  @Input() private data: string;
  @Output() private outer = new EventEmitter<string>();
  private inputData: string;
	constructor(private logger: LoggerService) {	}

  ngOnInit() {
    this.logger.debug('子组件已初始化');
  }

  sendToParent() {
    if(!this.inputData) return;
    this.outer.emit(this.inputData);
  }

}
