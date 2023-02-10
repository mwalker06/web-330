/**
 * Title: float-max-field.js
 * Author: Megan Walker
 * Date: 02/10/23
 * Description: float-max-field script for future-value.html
 * References: WEB 330 GitHub, & WEB 330 Assign_6
 */

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        return parseFloat(this.field) < parseFloat(this.max);
    }

    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`
    }
}
