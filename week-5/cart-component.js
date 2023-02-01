/**
 * Title: cart-component.js
 * Author: Megan Walker
 * Date: 02/01/23
 * Description: cart-component script for bobs-auto-repair.html
 * References: WEB 330 GitHub, & WEB 330 Assign_5
 */

// class is exported for use as a module
// create a web component inheriting from the HTMLElement class
class CartComponent extends HTMLElement {
  constructor() {
    super();
  }

  // connect the component to the DOM when called
  connectedCallback() {
    // the hteml to display when the tags are used
    this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> 
          (<span id="cart-count"></span>)`;
  }
}

// define how the custom component will be called
customElements.define('cart-component', CartComponent);
