// Product class
class Rifle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Cart item class
class Attachment {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  subtotal() {
    return this.product.price * this.quantity;
  }
}

// Shopping cart class
class Loadout {
  constructor() {
    this.items = [];
  }

  add(product, quantity) {
    this.items.push(new Attachment(product, quantity));
  }

  show() {
    let total = 0;

    for (const item of this.items) {
      console.log(
        `${item.product.name} x ${item.quantity} = ₱${item.subtotal()}`,
      );

      total += item.subtotal();
    }

    console.log(`\nTotal: ₱${total}`);
    console.log("Payment: Cash");
    console.log("Status: Paid");
  }
}

// Create products
const ammo = new Rifle(".50 caliber mag", 50000);
const stock = new Rifle("MIP Strike Stock", 10000);
const suppressor = new Rifle("Monolpithic Suppersor", 15000);

// Create cart and add items
const cart = new Loadout();

cart.add(ammo, 3);
cart.add(stock, 2);
cart.add(suppressor, 4);

// Display result
cart.show();

console.log(cart);