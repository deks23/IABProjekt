import ApiClient from "../api-client/ApiClient";
import { hashHistory } from "react-router";

export const LOGIN_SUCCESS_ACTION = "loginSuccess";
export const LOGOUT_ACTION = "logout";
export const EMPLOYEE_LOGIN_SUCCES_ACTION = "employeeLoginSuccess";

export const loginAction = user => {
  return dispatch => {
    ApiClient.post(LOGIN_URL, {
      email: user.email,
      password: user.password
    })
      .then(response => {
        dispatch({
          type: LOGIN_SUCCESS_ACTION,
          data: {
            email: user.email,
            token: response.data
          }
        });
        //hashHistory.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };
};


export const loginEmployeeAction = employee => {
  return dispatch => {
    ApiClient.post(EMPLOYEE_LOGIN_URL, {
      email: employee.email,
      password: employee.password
    })
      .then(response => {
        dispatch({
          type: EMPLOYEE_LOGIN_SUCCES_ACTION,
          data: {
            email: employee.email,
            token: response.data
          }
        });
        //hashHistory.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };
};


export const logoutAction = () => {
  return {
    type: LOGOUT_ACTION
  };
};

const LOGIN_URL = "login";
const EMPLOYEE_LOGIN_URL = "employeeLogin";
