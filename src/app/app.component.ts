import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Onur';
  items= [
    { description: "Finish Chapter 44", status: "not done"},
    { description: "Finish Chapter 45", status: "not done"},
    { description: "Finish Chapter 46", status: "not done"},
  ];
}
