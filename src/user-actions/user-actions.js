import ApiClient from "../api-client/ApiClient";
import { hashHistory } from "react-router";

export const LOGIN_SUCCESS_ACTION = "loginSuccess";
export const LOGOUT_ACTION = "logout";

export const loginAction = user => {
  return dispatch => {
    ApiClient.post(LOGIN_URL, {
      email: user.email,
      password: user.password
    })
      .then(response => {
        console.log(response);

        dispatch({
          type: LOGIN_SUCCESS_ACTION,
          data: {
            email: user.email,
            userId: response.data.userId,
            token: response.data.token
          }
        });
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
