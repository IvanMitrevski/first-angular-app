import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    {id: '1', name: 'Shampoo', price: 13.99, imageUrl: 'https://via.placeholder.com/300'},
    {id: '2', name: 'Deodorant', price: 6.58, imageUrl: 'https://via.placeholder.com/300'},
    {id: '3', name: 'Toothbrush', price: 10.99, imageUrl: 'https://via.placeholder.com/300'},
    {id: '4', name: 'Toothpaste', price: 15, imageUrl: 'https://via.placeholder.com/300'}
  ];

  constructor() { }

  getProducts(): Array<Product>{
    return this.products;
  }
}
