import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import checkAuth from '../../assets/apicalls/checkAuth';

import Cookies from 'js-cookie';

import { ME_URL } from '../../assets/variables/urls';
import { logIn, logOut } from '../../redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let loggedIn = useSelector(state => state.loggedin);
  const dispatch = useDispatch();
  let userToken = Cookies.get('token');

  return (
    <Route {...rest} render={props => (
      checkAuth(loggedIn, dispatch) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    )} />
  );
};

export default PrivateRoute;
