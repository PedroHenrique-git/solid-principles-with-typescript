import IProduct from "./interfaces/IProduct";

export class ShoppingCart {
  private readonly _items: Array<IProduct> = [];

  addProduct(product: IProduct): void {
    this._items.push(product);
  }

  removeProduct(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Array<IProduct>> {
    return this._items;
  }

  totalPrice(): number {
    return +this._items
      .reduce((ac, product) => ac + product.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
