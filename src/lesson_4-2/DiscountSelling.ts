import { AbstractSelling } from './AbstractSelling';
import { Product } from './Product';

export class DiscountSelling extends AbstractSelling {
  private discount: number = 10;
  constructor(product: Product, quantity: number) {
    super(product, quantity);
  }
  getPrice(): number {
    const finalPrice = Number(
      ((super.product._price - this.discount) * super.quantity).toFixed(2)
    );
    return finalPrice;
  }
}
