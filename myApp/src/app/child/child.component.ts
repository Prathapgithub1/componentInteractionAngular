import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,

  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input () public comesFromParent:any;
@Output () public sendToParent= new EventEmitter <String>();
sendData(){
  this.sendToParent.emit("hello this is from child")
}
}
