/**
 * Title: main-course.js
 * Author: Megan Walker
 * Date: 01/20/23
 * Description: main-course script for walker-restaurant.html
 * References: WEB 330 GitHub, & WEB 330 Assign_3
 */
import { Product } from "./product.js";
export class MainCourse extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
