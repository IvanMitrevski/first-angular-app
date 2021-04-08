import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Array<Product>;

  constructor(private productsService: ProductsService) {
  }

  //it is called when our component is opened
  ngOnInit(): void {
    console.log('ProductsListComponent - ngOnInit');
    this.products = this.productsService.getProducts();
    console.log('ProductsListComponent - products', this.products);
  }

  deleteProducts(): void {
    this.products = [];
  }

  //it is called when our component is closed
  ngOnDestroy(): void{

  }
}
