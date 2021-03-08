import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "state/types";

const initialState = {
  userAccount: [],
  loading: false,
  error: null,
};

const loginRequest = (state) =>
  Object.assign({}, state, { loading: true }, { error: null });

const loginSuccess = (state, action) =>
  Object.assign(
    {},
    state,
    {
      userAccount: state.userAccount.concat(action.payload),
    },
    { loading: false }
  );
const addToCartError = (state, action) =>
  Object.assign({}, state, { loading: false }, { error: action.error });

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return loginRequest(state);
    case LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case LOGIN_ERROR:
      return addToCartError(state, action);
    default:
      return state;
  }
};

export default cartReducers;
