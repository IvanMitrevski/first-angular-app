import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges {
  @Input() numberOfAddedProducts = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes) ;
  }

}
