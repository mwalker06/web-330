/**
 * Title: required-field.js
 * Author: Megan Walker
 * Date: 02/10/23
 * Description: required-field script for future-value.html
 * References: WEB 330 GitHub, & WEB 330 Assign_6
 */

// check for a string and provide a message
export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        return Boolean(this.field);
    }

    getMessage() {
        return `${this.name} is a required field.`
    }
}