import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  public parent = "hello im comming from parent"
  // child
  public received:String='';
  showChild(message:String){
    this.received=message
  }
}
