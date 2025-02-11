/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  cherry = {
    name: 'Cherry',
    price: 5.15,
    quantity: 0,
    productId: 0,
    image: 'images/cherry.jpg'
  },

  orange = {
    name: 'Orange',
    price: 0.75,
    quantity: 0,
    productId: 1,
    image: 'images/orange.jpg'
  },

  strawberry = {
    name: 'Strawberry',
    price: 4.35,
    quantity: 0,
    productId: 2,
    image: 'images/strawberry.jpg'
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
let cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
const addProductToCart = function (productId) {
  for (x = 0; x < products.length; x++) {
    if (products[x].productId === productId) {
      if (cart.length > 0) {
          if (cart.includes(products[x])) {
            const itemIndex = cart.indexOf(products[x]); 
            cart[itemIndex].quantity += 1;
            return cart; 
          } else {
            cart = cart.concat(products[x]);
            const itemIndex = cart.indexOf(products[x]);
            cart[itemIndex].quantity++;
            return cart;
          };
      } else {
        cart = [products[x]];
        cart[0].quantity++;
      };
    };
  };
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
const increaseQuantity = function (productId) {
    const cartItem = cart.find( Item => Item.productId === productId);
    cartItem.quantity++;

};
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
const decreaseQuantity = function (productId) {
  for (x = 0; x < cart.length; x++) {
    if (cart[x].productId === productId) {
      cart[x].quantity -= 1;
      if (cart[x].quantity <= 0) {
        cart.splice(x, 1);
        return cart;
      };
    };
  }
};
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
const removeProductFromCart = function (productId) {
  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      cartItem.quantity = 0;
      const index = cart.indexOf(cartItem);
      cart.splice(index, 1);
    };
  });
};
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
const cartTotal = function () {
  total = 0;
  for (x = 0; x < cart.length; x++) {
    total += cart[x].price * cart[x].quantity;
  };
  const cart_total = Number(total.toFixed(2))
  return cart_total;
};
/* Create a function called emptyCart that empties the products from the cart */
const emptyCart = function () {
  for (x = 0; x < cart.length; x++) {
    cart[x].quantity = 0;
    cart.pop();
  };
  return cart;
};
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let totalPaid = 0;

const pay = function (amount) {
  totalPaid += amount;
  let remaining = totalPaid - cartTotal();
  remaining = Number(remaining.toFixed(2));
  if (remaining >= 0) {
    emptyCart();
    totalPaid = 0;
    return remaining;
  }else {
    return remaining;
  }
};
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
};
