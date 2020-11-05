import { LOG_IN, LOG_OUT, PENDING } from './authTypes';
import { logIn, logOut, pending } from './authActions';

const initialState = {
  loggedin: false,
  loading: false,
  userId: '',
  username: '',
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        loggedin: true,
        loading: false,
        userId: action.userId,
        username: action.username
      }
    case LOG_OUT:
      return {
        ...state,
        loggedin: false,
        loading: false,
        error: action.error
      }
    case PENDING:
      return {
        ...state,
        loggedin: false,
        loading: true,
      }
  };
  return state;
};

export default authReducer;
