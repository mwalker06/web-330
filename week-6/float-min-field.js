/**
 * Title: float-min-field.js
 * Author: Megan Walker
 * Date: 02/10/23
 * Description: float-min-field script for future-value.html
 * References: WEB 330 GitHub, & WEB 330 Assign_6
 */

export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  validate() {
    return parseFloat(this.field) > parseFloat(this.min);
  }

  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}.`
  }
}
