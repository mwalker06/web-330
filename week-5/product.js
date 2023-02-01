/**
 * Title: product.js
 * Author: Megan Walker
 * Date: 02/01/23
 * Description: product script for walker-bobs-auto-repair.html
 * References: WEB 330 GitHub, & WEB 330 Assign_5
 */

// Create and export the Product class
export class Product {

  // Set the initial properties for the Product class include a random id
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Math.random().toString(16).slice(2);
  }
}