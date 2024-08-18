import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModel } from './product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgbModule, FormsModule, CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  products : ProductModel;

  constructor () {
    this.products = new ProductModel (1, 'Produit 1', 100)
  };

  ngOnInit(): void {
  }

  applyDiscount() {
    this.products.applyDiscount(10);
    console.log("Prix du produit avec remise =",this.products.price)
  }

}
