import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/store';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    let data = {
      username,
      email,
      password
    };

    dispatch(registerUser(data));
  };

  return (
    <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <Input type="text" name="username" placeholder="username"/>
      <Input type="email" name="email" placeholder="email"/>
      <Input type="password" name="password" placeholder="password"/>
      <Button type="submit" buttonType="primary" name="Register" />
    </form>
  );
};

export default RegisterForm;
