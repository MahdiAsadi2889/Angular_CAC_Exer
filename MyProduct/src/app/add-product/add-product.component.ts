import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  @Output() productAdded = new EventEmitter<{ name: string; price: number }>();
  productName: string = '';
  productPrice: number = 0;

  onAddProduct(form:NgForm) {
    if(form.invalid){
      alert("Please Enter Name & Price Feilds");
      return;
    }
    this.productAdded.emit({
      name: this.productName,
      price: this.productPrice,
    });
    form.reset();
  }
}
