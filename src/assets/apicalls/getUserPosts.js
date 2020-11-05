import { GET_USER_POSTS_URL } from '../variables/urls';
import Cookies from 'js-cookie';

const getUserPosts = (id) => {
  const userToken = Cookies.get('token');

  return fetch(GET_USER_POSTS_URL(id), {
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
      console.log('the request failed');
      return response_data.message;
    } else {
      console.log('the request worked');
      return response_data;
    }
  });
};

export default getUserPosts;
