import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products  implements OnInit {
  products! : Array<any>;

  constructor(private productService: Product) {}

  ngOnInit(): void {
      this.products = this.productService.getAllProducts();
  }

  hundleDelete(product: any) {
    this.productService.deleteProduct(product);
    this.products = this.productService.getAllProducts();

  }

}
