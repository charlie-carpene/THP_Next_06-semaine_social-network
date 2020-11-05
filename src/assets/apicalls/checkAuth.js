import { ME_URL } from '../variables/urls';
import Cookies from 'js-cookie';
import { logIn, logOut } from '../../redux';

const checkAuth = (loggedIn, dispatch) => {
  const userToken = Cookies.get('token');

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
      dispatch(logOut());
    } else {
      console.log('the request worked');
      dispatch(logIn(response_data.id, response_data.username));
    }
  });
  console.log(loggedIn);
  return loggedIn;
};

export default checkAuth;
