/**
 * Title: float-field.js
 * Author: Megan Walker
 * Date: 02/10/23
 * Description: float-field script for future-value.html
 * References: WEB 330 GitHub, & WEB 330 Assign_6
 */

/* the class to check input value */
export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    let value = parseFloat(this.field);
    return !isNaN(value);
  }  

  getMessage() {
    return `${this.name} must be a float value. You entered ${this.field}`;
  }
}
