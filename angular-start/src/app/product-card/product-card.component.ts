import { Component, input, output } from "@angular/core";
interface Product {
  id: number;
  name: string;
  price: number;
  available: boolean;
}
@Component({
  selector: "app-product-card",
  imports: [],
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.css",
})
export class ProductCardComponent {
  product = input.required<Product>();
  buy = output<Product>();
  addToCard(): void {
    this.buy.emit(this.product());
  }
}
