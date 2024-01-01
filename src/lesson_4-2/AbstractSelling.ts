import { Product } from './Product';

export abstract class AbstractSelling {
  abstract _product: Product;
  abstract _quantityOfGoods: number;
  abstract getPrice(): number;

  get getProduct(): Product {
    return this._product;
  }
  set setProduct(product: Product) {
    this._product = product;
  }
  get getQuantity(): number {
    return this._quantityOfGoods;
  }
  set setQuantity(quantity: number) {
    if (typeof this._quantityOfGoods === 'undefined') {
      this._quantityOfGoods = 1;
    } else this._quantityOfGoods = quantity;
  }
}
