import { Product } from './Product';
import { DiscountSelling } from './DiscountSelling';
import { DiscountSelling2 } from './DiscountSelling2';
import { AbstractSelling } from './AbstractSelling';

const product1 = new Product('product1', 50);
const product2 = new Product('product2', 100);
const product3 = new Product('product3', 150);
const product4 = new Product('product4', 200);

const product5 = new Product('product5', 50);
const product6 = new Product('product6', 100);
const product7 = new Product('product7', 150);
const product8 = new Product('product8', 200);

const purchase1 = new DiscountSelling2(product1, 1, 1);
const purchase2 = new DiscountSelling2(product2, 1, 1);
const purchase3 = new DiscountSelling2(product3, 1, 1);
const purchase4 = new DiscountSelling2(product4, 1, 1);

const purchase5 = new DiscountSelling(product5, 1);
const purchase6 = new DiscountSelling(product6, 1);
const purchase7 = new DiscountSelling(product7, 1);
const purchase8 = new DiscountSelling(product8, 1);

const productList: AbstractSelling[] = [
  purchase1,
  purchase2,
  purchase3,
  purchase4,
  purchase5,
  purchase6,
  purchase7,
  purchase8,
];
console.log(productList.sort((a, b) => b.compare(a)));
