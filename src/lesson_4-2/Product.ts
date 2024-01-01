export class Product {
  title: string;
  price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  get titleProduct() {
    return this.title;
  }

  set titleProduct(title: string) {
    this.title = title;
  }

  get titlePrice() {
    return this.price;
  }

  set titlePrice(price: number) {
    this.price = price;
  }
}

export const xiaomi = new Product('xiaomi', 50);
export const samsung = new Product('samsung', 100);

