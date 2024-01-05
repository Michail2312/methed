import { Product } from './Product';

export abstract class AbstractSelling {
  abstract _product: Product;
  abstract _quantityOfGoods: number;
  abstract getPrice(): number;

  get product(): Product {
    return this._product;
  }
  set product(product: Product) {
    this._product = product;
  }
  get quantity(): number {
    return this._quantityOfGoods;
  }
  set quantity(quantity: number) {
    if (typeof this._quantityOfGoods === 'undefined') {
      this._quantityOfGoods = 1;
    } else this._quantityOfGoods = quantity;
  }
}
