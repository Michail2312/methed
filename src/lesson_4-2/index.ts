import { Product } from './Product';
import { DiscountSelling } from './DiscountSelling';
import { DiscountSelling2 } from './DiscountSelling2';

const xiaomi = new Product('xiaomi', 50);
const samsung = new Product('samsung', 100);
const nokia = new Product('nokia', 150);
const motorola = new Product('motorola', 200);

const bike = new Product('bike', 50);
const motorbike = new Product('motorbike', 100);
const scooter = new Product('scooter', 150);
const car = new Product('car', 200);

const xiaomiPhone = new DiscountSelling2(xiaomi, 2);
const samsungPhone = new DiscountSelling2(samsung, 1);
const nokiaPhone = new DiscountSelling2(nokia, 4);
const motorolaPhone = new DiscountSelling2(motorola, 3);

const bikeTransport = new DiscountSelling(bike);
const motorbikeTransport = new DiscountSelling(motorbike);
const scooterTransport = new DiscountSelling(scooter);
const carTransport = new DiscountSelling(car);


const productList: (DiscountSelling2 | DiscountSelling)[] = [
  bikeTransport,
  motorbikeTransport,
  scooterTransport,
  carTransport,
  xiaomiPhone,
  samsungPhone,
  nokiaPhone,
  motorolaPhone,
];