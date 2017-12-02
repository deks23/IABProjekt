import { LOGIN_SUCCESS_ACTION, LOGOUT_ACTION } from "./user-actions";

const initialState = {
  user: {
    email: "",
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
          token: action.data.token
        }
      };
    case LOGOUT_ACTION:
      console.log("logg");
      return {
        user: {
          email: "",
          token: ""
        }
      };

    default:
      return currentState;
  }
};

export const loginReducer = Reducer;
