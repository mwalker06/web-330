/**
 * Title: shopping-cart.js
 * Author: Megan Walker
 * Date: 02/01/23
 * Description: shopping cart script for bobs-auto-repair.html
 * References: WEB 330 GitHub, & WEB 330 Assign_4
 */

// class  for tracking products and creating orders
export class ShoppingCart {
  constructor() {
    this.products = [];
  }

  // track the total orders
  count() {
    return this.products.length;
  }

  // add products to the local array
  add(product) {
    this.products.push(product);
  }

  // generate a list of products
  * listProducts() {
    for (let product of this.products) {
      yield product;
    }
  }
}

