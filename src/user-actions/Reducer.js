import { LOGIN_SUCCESS_ACTION, LOGOUT_ACTION, EMPLOYEE_LOGIN_SUCCES_ACTION } from "./user-actions";

const initialState = {
  user: {
    email: "",
    token: ""
  },
  employee:{
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
    case EMPLOYEE_LOGIN_SUCCES_ACTION:
    console.log(action.data);
    return{
      ...currentState,
      employee:{
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
        }, 
        employee:{
          email: "",
          token: ""
        }
      };

    default:
      return currentState;
  }
};

export const loginReducer = Reducer;
