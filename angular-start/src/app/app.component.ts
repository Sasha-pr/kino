import { Component, signal, inject } from "@angular/core";

import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from "./product.model";
import { ProductService } from "./product.service";
@Component({
  selector: "app-root",
  imports: [ProductCardComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  productService = inject(ProductService);
  products = this.productService.getProducts();
  secondProd = this.productService.getProductById(2);
  title: string = "angular-start123123";
  age = 25;
  image = "/image/iphone.jpg";
  count = signal(0);
  buttonDisabled = false;
  available = false;

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
