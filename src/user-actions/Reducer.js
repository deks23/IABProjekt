import { LOGIN_SUCCESS_ACTION, LOGOUT_ACTION } from "./user-actions";

const initialState = {
  user: {
    email: "",
    userId: "",
    token: ""
  }
};

const Reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS_ACTION:
      return {
        ...currentState,
        user: {
          email: action.data.email,
          userId: action.data.userId,
          token: action.data.token
        }
      };
    case LOGOUT_ACTION:
      return {
        user: {
          email: "",
          userId: "",
          token: ""
        }
      };

    default:
      return currentState;
  }
};

export const loginReducer = Reducer;
