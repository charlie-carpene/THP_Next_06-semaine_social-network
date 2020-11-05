import { createStore, compose, applyMiddleware } from 'redux';
import authReducer from './auth/authReducer';
import thunkMiddleware from 'redux-thunk';
import Cookies from 'js-cookie';

import { REGISTER_URL, LOGIN_URL, UPDATE_USER_URL, ME_URL } from '../assets/variables/urls';
import { logIn, logOut, pending } from '.';

const store = createStore(
  authReducer,
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const registerUser = (data) => {
  return (dispatch) => {
    dispatch(pending());
    fetch(REGISTER_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response_data) => {
      const regexp = new RegExp(/4\d{2}/); //if it's a 4** error then don't log in.

      if (regexp.test(response_data.statusCode)) {
        dispatch(logOut(response_data.message));
      } else {
        Cookies.set('token', response_data.jwt);
        dispatch(logIn());
      }
    });
  }
};

const logUser = (data) => {
  console.log(data);
  return (dispatch) => {
    dispatch(pending());
    fetch(LOGIN_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response_data) => {
      console.log(response_data);
      const regexp = new RegExp(/4\d{2}/); //if it's a 4** error then don't log in.

      if (regexp.test(response_data.statusCode)) {
        dispatch(logOut(response_data.message));
      } else {
        Cookies.set('token', response_data.jwt);
        dispatch(logIn(response_data.user.username));
      }
    });
  }
};

const updateUser = (data) => {
  let userToken = Cookies.get('token');

  return (dispatch) => {
    fetch(ME_URL, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .then((response_data) => {
      console.log(response_data);
      const regexp = new RegExp(/4\d{2}/); //if it's a 4** error then don't log in.

      if (regexp.test(response_data.statusCode)) {
        console.log(response_data.error);
      } else {
        console.log('the user id: ', response_data.id);
        console.log(data);
        fetch(UPDATE_USER_URL(response_data.id), {
          method: 'put',
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((response_data) => {
          const regexp = new RegExp(/4\d{2}/); //if it's a 4** error then don't log in.

          if (regexp.test(response_data.statusCode)) {
            console.log('nop');
          } else {
            console.log('ok');
          }
        });
      }
    });
  }
};

export default store;
export {
  registerUser,
  logUser,
  updateUser
}
