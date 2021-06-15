/*
  Open/Closed principle
  Entidades devem estar abertas para extensões mas fechadas para modificação
*/

import { Messaging } from "./services/messaging";
import { Order } from "./classes/Order";
import { Persistency } from "./services/persistency";
import { Product } from "./product";
import { ShoppingCart } from "./classes/shopping_cart";
import { NoDiscount } from "./classes/discount";

//const fiftyPercentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addProduct(new Product("Camisa", 50));
shoppingCart.addProduct(new Product("Calça", 90));
shoppingCart.addProduct(new Product("Cueca", 100));
shoppingCart.addProduct(new Product("Celular", 800));
shoppingCart.addProduct(new Product("Televisao", 999));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.totalPrice());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();