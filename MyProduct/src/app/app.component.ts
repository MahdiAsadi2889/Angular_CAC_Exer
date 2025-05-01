import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './Product';
import { AddProductComponent } from './add-product/add-product.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, AddProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MyProduct';
  products: Product[] = [
    { id: 1, name: '16', price: 100 },
    { id: 2, name: '14', price: 40 },
  ];
  onProductAdded(product: { name: string; price: number }) {
    const newProduct = {
      id: this.products.length + 1,
      name: product.name,
      price: product.price,
    };
    this.products.push(newProduct)
  }
}
