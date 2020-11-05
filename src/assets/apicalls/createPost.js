import { CREATE_POST_URL } from '../variables/urls';
import Cookies from 'js-cookie';

const createPost = (data) => {
  const userToken = Cookies.get('token');
  console.log(data);
  
  fetch(CREATE_POST_URL, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((response_data) => console.log(response_data))
};

export { createPost };
