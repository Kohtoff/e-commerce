import { createSlice } from '@reduxjs/toolkit';
import { getItemIndexById } from '../utils/getItemIndexById';

const initialState = {
  cartArray: [],
  totalPrice: 0,
  totalQty: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    pushToCart: ({ cartArray, totalPrice, totalQty }, { payload }) => {
      const { id, title, price, color, size, img } = payload;
      const itemIndex = getItemIndexById(id, cartArray);

      if (itemIndex === -1) {
        cartArray.push({ id, title, price, color, size, img, amount: 1 });
        totalPrice += Number(price);
        totalQty += 1;
      } else {
        cartArray[itemIndex].amount += 1;
        totalPrice += Number(price);
        totalQty += 1;
      }
    },

    removeFromCart: ({ cartArray, totalPrice, totalQty }, { payload }) => {
      const { id } = payload;
      const itemIndex = getItemIndexById(id, cartArray);

      const priceToRemove = Number(cartArray[itemIndex].amount * cartArray[itemIndex].price);
      totalPrice -= priceToRemove;
      totalQty -= cartArray[itemIndex].amount;

      cartArray.splice(itemIndex, 1);
    },

    changeAmount: ({ cartArray, totalPrice, totalQty }, { payload }) => {
      const { id, amount: addedAmount } = payload;
      const itemIndex = getItemIndexById(id, cartArray);
      let coefficient = 1;

      if (addedAmount < cartArray[itemIndex].amount) {
        coefficient = -1;
      }

      totalPrice += Number(coefficient * (cartArray[itemIndex].price * addedAmount));
      totalQty += Number(coefficient * addedAmount);
    },

    resetCart: (state) => {
      for (let key in state) {
        state[key] = initialState[key];
      }
    },
  },
});

const { reducer, actions } = cartSlice;
export default reducer;
export const { pushToCart, removeFromCart, changeAmount, resetCart } = actions;
export const selectCart = (rootState) => rootState.cart;
