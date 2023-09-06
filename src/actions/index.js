/**
 * action/index.js is introuduced to defined global actions
 * which can be invoked from any where from the app
 * current this is used in sidebar of product app
 * from here we can change the color, size and add item to the cart
 * @param {ACTION_NAME} color 
 * @returns 
 */
export const selectColor = (color) => ({
    type: 'SELECT_COLOR',
    color,
  });
  
  export const selectSize = (size) => ({
    type: 'SELECT_SIZE',
    size,
  });
  
  export const addToCart = () => ({
    type: 'ADD_TO_CART',
  });
  