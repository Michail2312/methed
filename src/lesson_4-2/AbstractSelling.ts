import { Product } from './Product';

export abstract class AbstractSelling {
  private _product: Product;
  private _quantity: number;
  abstract getPrice(): number;
  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  get product(): Product {
    return this._product;
  }
  set product(product: Product) {
    this._product = product;
  }
  get quantity(): number {
    return this._quantity;
  }
  set quantity(quantity: number) {
    if (typeof this._quantity === 'undefined') {
      this._quantity = 1;
    } else this._quantity = quantity;
  }

  compare(other: AbstractSelling): number {
    return this._product._price - other._product._price;
  }
}
