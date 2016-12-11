import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h1>根组件</h1>
    <p>
      嘿嘿，{{ greeting }}！
      <label>
        <input type="checkbox" [(ngModel)]="isShowMore">
        是否显示详细信息
      </label>
    </p>
    <p highlight *ngIf="isShowMore">Angular 2 是 Google 推出的新一代的Web开发框架</p>
    <my-child [message]="msgToChild" (outer)="receive($event)"></my-child>
    <p>从子组件获得的消息：{{ msgFromChild || '暂无' }}</p>
  </div>
  `,
  styles:[
    `div{
      background:#A1DE93;
      border-radius:5px;
      width:500px;height:300px;
      margin:100px auto;
      padding:20px;
    }`
  ]
})
export class AppComponent {
  private greeting: string;
  private isShowMore: boolean;
  private msgToChild: string;
  private msgFromChild: string;

	constructor(private logger: LoggerService) {	}

  ngOnInit() {
    this.greeting = 'Angular 2';
    this.msgToChild = 'msg from parent';
    this.logger.debug('应用已初始化');
  }

  receive(msg: string) {
    this.msgFromChild = msg;
  }
}
