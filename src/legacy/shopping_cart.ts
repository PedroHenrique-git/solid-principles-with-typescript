interface IProduct {
  name: string;
  price: number;
}

type TorderStatus = "open" | "closed";

export class ShoppingCart {
  private readonly _items: Array<IProduct> = [];
  private _orderStatus: TorderStatus = "open";

  addProduct(product: IProduct): void {
    this._items.push(product);
  }

  removeProduct(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Array<IProduct>> {
    return this._items;
  }

  get orderStatus(): TorderStatus {
    return this._orderStatus;
  }

  totalPrice(): number {
    return +this._items
      .reduce((ac, product) => ac + product.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";
    this.sendMessage(
      `Seu pedido com total de ${this.totalPrice()} está sendo processado`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log("Mensagem enviada: ", msg);
  }

  saveOrder(): void {
    console.log("Pedido salvo com sucesso");
  }

  clear(): void {
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addProduct({ name: "Camisa", price: 50 });
shoppingCart.addProduct({ name: "Calça", price: 90 });
shoppingCart.addProduct({ name: "Cueca", price: 100 });
shoppingCart.addProduct({ name: "Celular", price: 800 });
shoppingCart.addProduct({ name: "Televisao", price: 999 });

console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.totalPrice());
console.log(shoppingCart.orderStatus);
