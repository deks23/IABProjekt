import ApiClient from "../api-client/ApiClient";

import { withRouter } from 'react-router-dom';
export const LOGIN_SUCCESS_ACTION = "loginSuccess";
export const LOGOUT_ACTION = "logout";
export const EMPLOYEE_LOGIN_SUCCES_ACTION = "employeeLoginSuccess";

export const loginAction = (user, history) => {
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
        if( response.data!=="failed")
        history.push("/user");
        else history.push("/loginFailed");
      })
      .catch(error => {
        console.log(error);
      });
  };
};


export const loginEmployeeAction = (employee, history) => {
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
        if(response.data!=="failed")
        history.push("/addPatient");
        else history.push("/loginFailed");
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
