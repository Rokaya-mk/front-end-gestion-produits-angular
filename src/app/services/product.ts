import { Service } from '@angular/core';

@Service()
export class Product {
    products =  [
          { id:1,name: "Product 1", price: 100.99, selected: true },
          { id:2,name: "Product 2", price: 200.00, selected: true },
          { id:3,name: "Product 3", price: 150.00, selected: false },
        ]

    getAllProducts() {
        return this.products;
    }

    deleteProduct(product: any) {
        let val = confirm("Voulez-vous supprimer ce produit ?");
        if (val == true) {
          this.products = this.products.filter((p :any) => p.id !== product.id);
        } 
    }
}
