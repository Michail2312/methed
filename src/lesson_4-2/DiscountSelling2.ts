import { AbstractSelling } from './AbstractSelling';
import { Product } from './Product';

export class DiscountSelling2 extends AbstractSelling {
  constructor(_product: Product, _quantityOfGoods?: number);
  constructor(public _product: Product, public _quantityOfGoods: number) {
    super();
    this._product = _product;
    this._quantityOfGoods =
      typeof _quantityOfGoods !== 'undefined' ? this._quantityOfGoods : 1;
  }

  getPrice(): number {
    if (this._quantityOfGoods < 3) {
      return this._product.price * this._quantityOfGoods;
    } else{
      const finalPrice = Number(((this._product.price - (this._product.price * 10) / 100) * this._quantityOfGoods).toFixed(2));
      return finalPrice;
    }

  }
}
