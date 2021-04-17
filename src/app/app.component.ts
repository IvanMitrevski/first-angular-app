import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  color: any;
  today: number = Date.now();
  public product =  { id: '5', name: 'Rakija', price: 499.99, imageUrl: 'https://wine.mk/wp-content/uploads/2020/04/qwer.png' };
}
