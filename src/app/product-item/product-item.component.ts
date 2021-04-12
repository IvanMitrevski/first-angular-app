import { Product } from './../product';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy {

  // This @Input() tells Angular that we want to resend this product as a variable.
  // Check the product-list.component.html to see how I call it
  @Input() product: Product;

  //Something, we still don't know when, MAYBE the child component will transfer some info to the father component
  @Output() addedToCart = new EventEmitter<string>();

  intervalId;

  constructor() { }

  ngOnInit(): void{
    this.intervalId = setInterval(() => {
      console.log("ProductItemComponent - ngOnInit");
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log("ProductItemComponent - OnDestroy");
  }

    addToCart(event:Event){
	//debagiranje
      console.log(event);
  //emitting the id
      this.addedToCart.emit(this.product.id);
	}

}
