/**
 * Title: food-model.js
 * Author: Megan Walker
 * Date: 01/27/23
 * Description: product script for walker-calorie.html
 * References: WEB 330 GitHub, & WEB 330 Assign_4
 */

// class is exported for use as a module
export class FoodModel {
  constructor(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
}
