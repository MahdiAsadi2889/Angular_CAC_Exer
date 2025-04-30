interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  inventory: number;
  rate: number;
}

export class Product implements IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  inventory: number;
  rate: number;
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    inventory: number,
    rate: number
  ){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.inventory = inventory;
    this.rate = rate;
  }
isAvailable():boolean{
    return this.inventory >= this.quantity;
}
}

