/**
 * Title:  finance-calculator.js
 * Author: Megan Walker
 * Date: 02/10/23
 * Description:  finance-calculator script for future-value.html
 * References: WEB 330 GitHub, & WEB 330 Assign_6
 */

/* the class that will do all the calculations */
export class FinanceCalculator {
  static MONTHS_IN_YEAR = 12;

  static calculateFutureValue(monthlyPayment, rate, years) {
    const months = years * this.MONTHS_IN_YEAR;
    const interestRate = 1 + rate / 100;
    const presentValue = monthlyPayment * months;
    const futureValue = presentValue * (Math.pow(interestRate, months));

    return futureValue;
  }

  static convertToCurrency(field) {
    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });

    return currencyFormatter.format(field);
  }

}