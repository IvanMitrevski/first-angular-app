import { Product } from './../product';
import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnDestroy {

  //This @Input() tells Angular that we want to resend this product as a variable. Check the product-list.component.html to see how I call it
  @Input() product: Product;
  constructor() { }

  ngOnDestroy(): void {
    console.log("ProductItemComponent - OnDestroy");
  }

}
