import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Array<Product>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    console.log('ProductsListComponent - ngOnInit');
    this.products = this.productsService.getProducts();
    console.log('ProductsListComponent - products', this.products);
  }
}
