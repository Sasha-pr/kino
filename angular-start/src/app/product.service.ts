import { Injectable } from "@angular/core";
import { Product } from "./product.model";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products: Product[] = [
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
  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
