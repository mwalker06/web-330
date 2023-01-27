/**
 * Title: calorie-converter.js
 * Author: Megan Walker
 * Date: 01/27/23
 * Description: product script for walker-calorie.html
 * References: WEB 330 GitHub, & WEB 330 Assign_4
 */

// import the FoodModel class
import { FoodModel } from "./food-model.js";

// Create the CalorieConverter class with data and a method to find food
export class CalorieConverter extends FoodModel {

  // An array of FoodModel objects to populate the search results
  static data = [
    new FoodModel(1007, "Egg", 78),
    new FoodModel(1008, "Apple", 95),
    new FoodModel(1009, "Hamburger", 354),
    new FoodModel(1010, "Fries", 400),
    new FoodModel(1011, "Banana", 105),
    new FoodModel(1012, "Soda", 150)
  ];

  // Use this method to find the object that corresponds to item input
  static find(foodName) {
    this.foodName = foodName;

    return this.data.filter((obj) => {
      if (this.foodName.includes(`${obj.name}`.toLowerCase())) return obj;
    });
  }
}
