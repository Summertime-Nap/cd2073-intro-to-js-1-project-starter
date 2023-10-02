/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  cherry = {
    name: 'Cherry',
    price: 0.15,
    quantity: 0,
    productId: 0,
    image: 'cherry.jpg'
  },
  
  orange = {
    name: 'Orange',
    price: 0.75,
    quantity: 0,
    productId: 1,
    image: 'orange.jpg'
  },
  
  strawberry = {
    name: 'Strawberry',
    price: 0.35,
    quantity: 0,
    productId: 2,
    image: 'strawberry.jpg'
  },
];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
const addProductToCart = function(productId) {
  /* come back to change code to a .forEach function */
  for ( x = products.length - 1; x >= 0; x--) {
    if (products[x].productId === productId) {
      for ( y = cart.length -1; y >= 0; y--) {
        if (cart[y].productId === productId) {
          cart[y].quantity += 1;
        }else {
          cart = products[x];
        };
      }
    }else {
      console.log('This Item does not exist');
    };
  };
  return cart;
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
const increaseQuantity = function (productId) {
  for ( x = cart.length - 1; x >= 0; x--) {
    if (cart[x].productId === productId) {
      cart[x].quantity += 1;
    } else {
      console.log('This product does not exist');
    };
  };
  return cart;
};
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
const decreaseQuantity = function (productId) {
  for ( x = cart.length - 1; x >= 0; x--) {
    if (cart[x].productId === productId) {
      cart[x].quantity -= 1;
      if (cart[x].quantity <= 0) {
        cart.splice(x, 1);
      };
    } else {
      console.log('This product does not exist');
    };
  };
  return cart;
};
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
const removeProductFromCart = function (productId) {
  for (x = cart.length -1; x >= 0; x--) {
    if ( cart[x].productId === productId) {
      cart.splice(x, 1);
    }else {
      console.log('That product does not exist');
    };
  };
  return cart;
};
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
const cartTotal = function () {
  total = 0;
  for (x = cart.length -1; x >= 0; x--) {
    total = cart[x].price;
  };
  return '$' + total;
};
/* Create a function called emptyCart that empties the products from the cart */
const emptyCart = function () {
  for ( x = cart.length -1; x >= 0; x++) {
    cart.pop();
  };
  return cart;
};
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

const pay = function (amount) {
  return amount - cartTotal;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
