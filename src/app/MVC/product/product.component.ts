import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Product , ProductModel } from './product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductMvcService } from '../../services/product_mvc/product-mvc.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgbModule, FormsModule, CommonModule],
  templateUrl: './product.component.html',
})
// export class ProductComponent {
//   products : Product
//   productModel : ProductModel;

//   constructor () {
//     this.productModel = new ProductModel (1, 'Produit 1', 100);
//     this.products = this.productModel;
//   };

//   ngOnInit(): void {
//   }

//   applyDiscount() {
//     this.productModel.applyDiscount(10);
//     console.log("Prix du produit avec remise ="this.products.price)
//   }

// }

export class ProductComponent implements OnInit {
  products : ProductModel [] = [];

  constructor (private product_mvc_service : ProductMvcService ){}
  ngOnInit(): void {
      this.products = this.product_mvc_service.getProducts() as ProductModel[];
      console.log(this.products); // Vérifiez les données retournées
  }

  applyDiscount(product: ProductModel): void {
    product.applyDiscount(10);
  }
}