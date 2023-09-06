import { combineReducers } from 'redux';

const selectedColor = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_COLOR':
      return action.color;
    default:
      return state;
  }
};

const selectedSize = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_SIZE':
      return action.size;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedColor,
  selectedSize,
});

export default rootReducer;
