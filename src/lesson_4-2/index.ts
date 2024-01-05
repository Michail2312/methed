import { Product } from './Product';
import { DiscountSelling } from './DiscountSelling';
import { DiscountSelling2 } from './DiscountSelling2';

const xiaomi = new Product('xiaomi', 50);
const samsung = new Product('samsung', 100);

const xiaomiPhone = new DiscountSelling(xiaomi);
const samsungPhone = new DiscountSelling(samsung);

const xiaomiPhone2 = new DiscountSelling2(xiaomi);
const samsungPhone2 = new DiscountSelling2(samsung, 3);

console.log(xiaomiPhone2);
xiaomiPhone2.quantity = 5;
console.log(xiaomiPhone2);
console.log(samsungPhone2);
