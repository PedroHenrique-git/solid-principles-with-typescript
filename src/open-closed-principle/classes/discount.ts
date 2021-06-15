export abstract class Discount {
  protected discount = 0;
  calculate(price: number): number {
    return price - price * (this.discount / 100);
  }
}

export class FiftyPercentDiscount extends Discount {
  protected discount = 15;
}

export class NoDiscount extends Discount {}
