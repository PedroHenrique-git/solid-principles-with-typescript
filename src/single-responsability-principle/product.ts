import IProduct from "./entities/interfaces/IProduct";

export class Product implements IProduct {
  constructor(public name: string, public price: number) {}
}
