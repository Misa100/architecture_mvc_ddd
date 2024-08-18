import { Injectable } from '@angular/core';
import { Product, ProductModel } from '../../MVC/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductMvcService {
  getProducts(): ProductModel[] {
    return [
      new ProductModel(1, 'Produit A', 100),
      new ProductModel(2, 'Produit B', 150),
    ];
  }
}