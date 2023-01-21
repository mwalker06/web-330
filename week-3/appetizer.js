/**
 * Title: appetizer.js
 * Author: Megan Walker
 * Date: 01/20/23
 * Description: appetizer script for walker-restaurant.html
 * References: WEB 330 GitHub, & WEB 330 Assign_3
 */
import { Product } from "./product.js";
export class Appetizer extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
