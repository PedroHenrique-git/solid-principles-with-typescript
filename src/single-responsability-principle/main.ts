import { Messaging } from "./services/messaging";
import { Order } from "./entities/Order";
import { Persistency } from "./services/persistency";
import { Product } from "./product";
import { ShoppingCart } from "./entities/shopping_cart";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addProduct(new Product("Camisa", 50));
shoppingCart.addProduct(new Product("Calça", 90));
shoppingCart.addProduct(new Product("Cueca", 100));
shoppingCart.addProduct(new Product("Celular", 800));
shoppingCart.addProduct(new Product("Televisao", 999));

console.log(order.orderStatus);
order.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.totalPrice());
console.log(order.orderStatus);
