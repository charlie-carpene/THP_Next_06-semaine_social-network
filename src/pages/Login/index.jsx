import LoginForm from './Form';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const Login = () => {
  let loggedIn = useSelector(state => state.loggedin);

  return (
    <>
      <h1 class="text-center">Login</h1>
      {loggedIn ? <Redirect to="/profil" /> : <LoginForm />}
    </>
  )
};

export default Login;
