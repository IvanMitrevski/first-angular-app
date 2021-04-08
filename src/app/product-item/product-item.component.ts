import { Product } from './../product';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy {

  //This @Input() tells Angular that we want to resend this product as a variable. Check the product-list.component.html to see how I call it
  @Input() product: Product;
  constructor() { }

  //even after we delete the items, this will ngOnInit will continue to console log every 5 seconds
  ngOnInit(): void{
    setInterval(() => {
      console.log("ProductItemComponent - ngOnInit");
    }, 5000);
  }

  ngOnDestroy(): void {
    console.log("ProductItemComponent - OnDestroy");
  }

}
