import { AbstractSelling } from './AbstractSelling';
import { Product } from './Product';

export class DiscountSelling extends AbstractSelling {
  _quantityOfGoods: number;
  constructor(public _product: Product) {
    super();
    this._product = _product;
    this._quantityOfGoods = 1;
  }

  getPrice(): number {
    const finalPrice = Number(
      ((this._product.price - 10) * this._quantityOfGoods).toFixed(2)
    );
    return finalPrice;
  }
}
