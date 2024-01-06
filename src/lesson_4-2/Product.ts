export class Product {
  _title: string;
  _price: number;
  constructor(title: string, price: number) {
    this._title = title;
    this._price = price;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get price() {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }
}



