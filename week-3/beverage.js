/**
 * Title: beverage.js
 * Author: Megan Walker
 * Date: 01/20/23
 * Description: beverage script for walker-restaurant.html
 * References: WEB 330 GitHub, & WEB 330 Assign_3
 */

import { Product } from "./product.js";
export class Beverage extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
