import { LOG_IN, LOG_OUT, PENDING } from './authTypes';

export const logIn = (userId, username) => {
  return {
    type: LOG_IN,
    userId,
    username
  }
};

export const logOut = (error) => {
  return {
    type: LOG_OUT,
    error
  }
};

export const pending = () => {
  return {
    type: PENDING,
  }
}
