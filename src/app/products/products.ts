import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products  implements OnInit {
  products! : Array<any>;

  constructor() {}

  ngOnInit(): void {
      this.products =  [
          { id:1,name: "Product 1", price: 100.99, selected: true },
          { id:2,name: "Product 2", price: 200.00, selected: true },
          { id:3,name: "Product 3", price: 150.00, selected: false },
        ]
  }

}
