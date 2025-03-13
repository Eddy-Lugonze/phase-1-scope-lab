// Write your solution in this file!
//  Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

//  Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly global
}

//  Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

//  Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'some customer';

// Function attempting to change leastFavoriteCustomer (should fail)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another customer'; // This will cause an error
}
