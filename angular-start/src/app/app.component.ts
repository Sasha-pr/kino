import { Component, signal } from "@angular/core";

import { ProductCardComponent } from "./product-card/product-card.component";
interface Product {
  id: number;
  name: string;
  price: number;
  available: boolean;
}
@Component({
  selector: "app-root",
  imports: [ProductCardComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title: string = "angular-start123123";
  age = 25;
  image = "/image/iphone.jpg";
  count = signal(0);
  buttonDisabled = false;
  available = false;
  products: Product[] = [
    {
      id: 1,
      name: "Iphone",
      price: 100000,
      available: true,
    },
    {
      id: 2,
      name: "Samsung",
      price: 14540,
      available: false,
    },
    {
      id: 3,
      name: "Xiaomi",
      price: 20000,
      available: true,
    },
  ];

  cartCount = signal(0);
  addToCart(product: Product) {
    this.cartCount.update((count) => count + 1);
    console.log(`Добавлен товар ${product.name}`);
  }
  sayHello(): void {
    console.log("hello");
  }
  plus(): void {
    this.count.update((count) => count + 1);
  }
}
