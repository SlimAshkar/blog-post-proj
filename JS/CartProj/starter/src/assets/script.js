/*
------------------------------------------
  Products Array that have 3 Objects.
------------------------------------------
*/ const products = [
  // 1# Cherry Object.
  (cherry = {
    name: "Cherry",
    price: 25,
    quantity: 0,
    productId: 1,
    image: (src = "images/cherry.jpg"),
  }),
  // 2# Orange Object.
  (orange = {
    name: "Orange",
    price: 15,
    quantity: 0,
    productId: 2,
    image: (src = "images/orange.jpg"),
  }),
  // 3# Strawberry Object.
  (strawberry = {
    name: "Strawberry",
    price: 20,
    quantity: 0,
    productId: 3,
    image: (src = "images/strawberry.jpg"),
  }),
];
/*
-------------------------------------------------------------------------------------------------------------------------------------
  Empty Array that holds the items in the cart.
-------------------------------------------------------------------------------------------------------------------------------------
*/ let cart = [];

/*
-------------------------------------------------------------------------------------------------------------------------------------
  Num #1 Function === This function adds the products to the shopping cart by clicking on "ADD TO CART".
-------------------------------------------------------------------------------------------------------------------------------------
*/ function addProductToCart(productId) {
  products.forEach((product) => {
    if (product.productId === productId) {
      product.quantity++;
      if (!cart.includes(product)) {
        cart.push(product);
      }
    }
  });
}
/*
-------------------------------------------------------------------------------------------------------------------------------------
  Num #2 Function === This function let us increase the quantity by clicking "+" button on "Your Shopping Cart" product window .
-------------------------------------------------------------------------------------------------------------------------------------
*/ function increaseQuantity(productId) {
  products.forEach((product) => {
    if (product.productId === productId) {
      product.quantity++;
    }
  });
}
/*
-------------------------------------------------------------------------------------------------------------------------------------
  Num #3 Function === This function allows us to decrease the quantity by clicking "-" button on "Your Shopping Cart" product window.
-------------------------------------------------------------------------------------------------------------------------------------
*/ function decreaseQuantity(productId) {
  cart.find((products) => {
    if (products.productId === productId) {
      if (products.quantity > 0) {
        products.quantity--;
        if (products.quantity === 0) {
          removeProductFromCart(productId);
        }
      }
    }
  });
}
/*
-------------------------------------------------------------------------------------------------------------------------------------
 Num #4 Function === This function should update the product quantity to 0, and should remove product from cart.
-------------------------------------------------------------------------------------------------------------------------------------
*/ function removeProductFromCart(productId) {
  cart.forEach(function (element, index, array) {
    if (element.productId === productId) {
      cart.splice(index, 1);
      element.quantity = 0;
    }
  });
}

/*
----------------------------------------------------------------------------------------------------------------------------------------------
 Num #5 Function === This function iterate through the cart to get the total of all products, and return the sum of the products in the cart.
----------------------------------------------------------------------------------------------------------------------------------------------
*/ function cartTotal() {
  let sum = 0;
  for (const product of cart) {
    sum = sum + product.price * product.quantity;
  }
  return sum;
}
/*
-------------------------------------------------------------------------------------------------------------------------------------
 Num #6 Function === This function make sure that the cart is empty.
-------------------------------------------------------------------------------------------------------------------------------------
*/ function emptyCart() {
  cart = [];
}
/*
-------------------------------------------------------------------------------------------------------------------------------------
 Pay Function === This function gives a negative/positive money balance to the customer.
-------------------------------------------------------------------------------------------------------------------------------------
*/ let balance = 0;

function pay(amount) {
  let sum = amount - cartTotal();
  if (balance < 0) {
    return (balance = balance + amount);
  }
  balance = sum;
  return sum;
}
/*
-------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------
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
