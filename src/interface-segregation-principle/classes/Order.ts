import { TorderStatus } from "./interfaces/TorderStatus";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./shopping_cart";
import { CustomerOrder } from "./interfaces/customer_protocol";

export class Order {
  private _orderStatus: TorderStatus = "open";

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): TorderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";
    this.message.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} está sendo processado`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `O cliente ${this.customer.getName()}, com ID: ${this.customer.getIDN()} finalizou a compra`,
    );
  }
}
