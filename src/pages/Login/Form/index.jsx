import { useDispatch } from 'react-redux';
import { logUser } from '../../../redux/store';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const identifier = e.target.email.value;
    const password = e.target.password.value;
    let data = {
      identifier,
      password
    };

    dispatch(logUser(data));
  };

  return (
    <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <Input type="email" name="email" placeholder="email"/>
      <Input type="password" name="password" placeholder="password"/>
      <Button type="submit" buttonType="primary" name="Login" />
    </form>
  );
};

export default LoginForm;
