import { AbstractSelling } from './AbstractSelling';
import { Product } from './Product';

export class DiscountSelling2 extends AbstractSelling {
  private _discountPercentage: number = 10;
  private _discountQuantity: number;
  constructor(product: Product, quantity: number, discountQuantity: number) {
    super(product, quantity);
    this._discountQuantity = discountQuantity;
  }

  getPrice(): number {
    const discountPrice = Number(
      ((this.product._price * (1 - this._discountPercentage)) / 100).toFixed(2)
    );

    return this.quantity >= this._discountQuantity
      ? discountPrice * this.quantity
      : this.product._price * this.quantity;
  }
}
