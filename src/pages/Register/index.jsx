import RegisterForm from './Form';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const Register = () => {
  let loggedIn = useSelector(state => state.loggedin);

  return (
    <>
      <h1 className="text-center">Register</h1>
      {loggedIn ? <Redirect to="/profil" /> : <RegisterForm />}
    </>
  )
};

export default Register;
