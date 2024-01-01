import { AbstractSelling } from './AbstractSelling';
import { Product, xiaomi, samsung } from './Product';

class DiscountSelling extends AbstractSelling {
  constructor(_product: Product, _quantityOfGoods?: number);
  constructor(public _product: Product, public _quantityOfGoods: number) {
    super();
    this._product = _product;
    this._quantityOfGoods =
      typeof _quantityOfGoods === 'undefined'
        ? (this.setQuantity = 1)
        : this._quantityOfGoods;
  }

  getPrice(): number {
    return (this._product.price - 10) * this._quantityOfGoods;
  }
}

const xiaomiPhone = new DiscountSelling(xiaomi, 3);
const samsungPhone = new DiscountSelling(samsung);
// console.log(xiaomiPhone.getPrice());
// console.log(samsungPhone);

class DiscountSelling2 extends AbstractSelling {
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
    } else
      return (
        (this._product.price - (this._product.price * 10) / 100) *
        this._quantityOfGoods
      );
  }
}

const xiaomiPhone2 = new DiscountSelling2(xiaomi, 3);
const samsungPhone2 = new DiscountSelling2(samsung, 3);
console.log(xiaomiPhone2.getQuantity);
console.log(xiaomiPhone2.getPrice());
xiaomiPhone2.setQuantity = 5;
console.log(xiaomiPhone2.getQuantity);
console.log(xiaomiPhone2.getPrice());
// console.log(samsungPhone2.getPrice());
