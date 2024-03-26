import { SET_TRANSACTIONS } from './actions';

const initialState = {
  transactionsData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactionsData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
