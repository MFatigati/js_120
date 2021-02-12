/* // 2

function makeObj() {
  let obj = {
    propA = 10,
    propB = 20
  };
  return obj;
} */

// 3

// To process multiple invoices, we need a factory method that we can use to create invoices. 
// The requirements for the factory function are as follows:

// It returns an invoice object, with phone and internet properties, and a total method.
// The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!).
// The function takes an object argument whose attributes override the default values.

// MY CREATEINVOICE FACTORY FUNCTION
/* let createInvoice = function(obj = {}) {
  // let phoneCost = obj.phone || 3000;
  // let internetCost = obj.internet || 5500;
  
  return {
    phone: obj.phone ? obj.phone : 3000,
    internet: obj.internet ? obj.internet : 5500,
    paid: 0,
    // phone: phoneCost,
    // internet: internetCost,
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      this.paid += Object.values(payment).reduce((sum, elem) => {
        if (typeof elem === "number") {
          sum += elem;
        }
        return sum;
      }, 0);
    },
    addPayments(payments) {
      payments.forEach(x => {this.paid +=
        Object.values(x).reduce((sum, elem) => {
        if (typeof elem === "number") {
          sum += elem;
        }
        return sum;
      }, 0);
    })
    },
    amountDue() {
      return this.total() - this.paid;
    }
  }
} */
// revised version of my own createInvoice function after realizing I could just add the total
// of the payment via the total method on the payment object

let createInvoice = function(obj = {}) {
  
  return {
    phone: obj.phone ? obj.phone : 3000,
    internet: obj.internet ? obj.internet : 5500,
    paid: 0,
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      this.paid += payment.total();
    },
    addPayments(payments) {
      payments.forEach(payment => {this.paid += payment.total()});
    },
    amountDue() {
      return this.total() - this.paid;
    }
  }
}

// LS CREATEINVOICE FACTORY FUNCTION

/* function createInvoice(services = {}) {
  let phoneCharge = services.phone || 3000;
  let internetCharge = services.internet || 5500;
  phoneCharge = (services.phone === 0) ? 0 : phoneCharge;
  internetCharge = (services.internet === 0) ? 0 : internetCharge;
  return {
    phone: phoneCharge,
    internet: internetCharge,
    payments: [],

    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(payment) {
      this.payments.push(payment);
    },

    addPayments: function(payments) {
      payments.forEach(this.addPayment, this);
    },

    paymentTotal: function() {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },

    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
  };
} */

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000

//

// Payment for one service, e.g., { internet: 1000 } or { phone: 1000 }.
// Payment for both services, e.g., { internet: 2000, phone: 1000 }.
// Payment with just an amount property, e.g., { amount: 2000 }.

// The function should return an object that has the amount paid for each service 
// and a total method that returns the payment total. If the amount property is 
// not present in the argument, it should return the sum of the phone and internet 
// service charges; if the amount property is present, return the value of that property.

function createPayment(services = {}) {
  return {
    internet: services.internet ? services.internet : 0,
    phone: services.phone ? services.phone : 0,
    amount: services.amount ? services.amount : 0,
    total() {
      return this.internet + this.phone + this.amount;
    }
  }
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

// Update the createInvoice function so that it can add payment(s) to invoices. 
// Use the following code as a guideline:

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

//console.log(payment3);

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
//console.log(invoice);
console.log(invoice.amountDue());       // this should return 0