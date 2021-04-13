import { ProductItemComponent } from './../product-item/product-item.component';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, AfterViewInit, OnDestroy {

  products: Array<Product>;

  //accessing the desired child component through the father component
  @ViewChild(ProductItemComponent) child: ProductItemComponent;

  numberOfAddedProducts = 0;

  constructor(private productsService: ProductsService) {
  }

  //it is called when our component is opened
  ngOnInit(): void {
    console.log('ProductsListComponent - ngOnInit');
    this.products = this.productsService.getProducts();
    console.log('ProductsListComponent - products', this.products);

    console.log("ngOnInit", this.child);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.child);
  }

  deleteProducts(): void {
    this.products = [];
  }

  //it is called when our component is closed
  ngOnDestroy(): void{ }

  updateShoppingCart(productId: string) {
    console.log(productId);
    this.numberOfAddedProducts += 1;
  }

  updateShoppingCartN(productName: string) {
    console.log(productName);
  }
}
