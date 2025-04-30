import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = [
    new Product(1, '16 Pro-Max', 200000, 5, 7, 4.5),
    new Product(2, '15 Pro-', 150000, 9, 7, 3.5),
    new Product(3, '11 Pro-Max', 2000, 10, 10, 4),
    new Product(4, '13 Pro-Max', 400000, 9, 6, 4.8),
  ];
}
