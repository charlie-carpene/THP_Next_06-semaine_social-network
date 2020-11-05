const url = "https://my-pasteque-space.herokuapp.com";
const REGISTER_URL = url + "/auth/local/register";
const LOGIN_URL = url + "/auth/local";
const ME_URL = url + "/users/me";
const UPDATE_USER_URL = (userId) => url + `/users/${userId}`;
const CREATE_POST_URL = url + '/posts';
const GET_POSTS_URL = url + '/posts';
const GET_USER_POSTS_URL = (userId) => url + `/posts?user.id=${userId}`;

export {
  REGISTER_URL,
  LOGIN_URL,
  ME_URL,
  UPDATE_USER_URL,
  CREATE_POST_URL,
  GET_POSTS_URL,
  GET_USER_POSTS_URL
}
