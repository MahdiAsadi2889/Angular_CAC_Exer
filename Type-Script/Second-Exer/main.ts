interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  available: boolean;
}

class User implements IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  available: boolean;

  constructor(
    id: number,
    name: string,
    price: number,
    description: string,
    available: boolean
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.available = available;
  }

  displayInfo(): void {
    console.log(
      `${this.name} - ${this.price}$ - ${
        this.available ? "Available" : "Out of stock"
      }`
    );
  }
}

const mobile1 = new User(
  1,
  "16 Pro Max",
  10000000,
  "This Mobile is very PowerFull",
  true
);
mobile1.displayInfo();
