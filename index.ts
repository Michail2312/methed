const car1: {
  brand: string;
  model: string;
  country: string;
  price: number;
  color: string;
  rating: [string, number][];
} = {
  brand: 'BMW',
  model: 'xDrive30e',
  country: 'Germany',
  price: 50_000,
  color: 'white',
  rating: [
    ['performance', 8.0],
    ['comfort', 8.0],
    ['interior', 8.5],
    ['technology', 8.0],
    ['storage', 8.0],
    ['fuelEconomy', 6.5],
    ['value', 7.5],
    ['wildcard', 8.5],
  ],
};

const totalVerdict1 = (car: {
  brand: string;
  model: string;
  country: string;
  price: number;
  color: string;
  rating: [string, number][];
}) => {
  const sumRating = car.rating.reduce((acc, item) => {
    return item[1] + acc;
  }, 0);
  const verdict = sumRating / car.rating.length;
  return verdict;
};

export const carResult1 = totalVerdict1(car1);

const car2: {
  brand: string;
  model: string;
  country: string;
  price: number;
  color: string;
  rating: [string, string][];
} = {
  brand: 'BMW',
  model: 'xDrive30e',
  country: 'Germany',
  price: 50_000,
  color: 'white',
  rating: [
    ['performance', '8.0'],
    ['comfort', '8.0'],
    ['interior', '8.5'],
    ['technology', '8.0'],
    ['storage', '8.0'],
    ['fuelEconomy', '6.5'],
    ['value', '7.5'],
    ['wildcard', '8.5'],
  ],
};

const totalVerdict2 = (car: {
  brand: string;
  model: string;
  country: string;
  price: number;
  color: string;
  rating: string[][];
}) => {
  const sumRating = car.rating.reduce((acc, item) => {
    return Number(item[1]) + acc;
  }, 0);
  const verdict = sumRating / car.rating.length;
  return verdict;
};

export const carResult2 = totalVerdict2(car2);