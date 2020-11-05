import { useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/store';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const UpdateUserForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    if (e.target.username.value) data.username = e.target.username.value;
    if (e.target.email.value) data.email = e.target.email.value;
    if (e.target.password.value) data.password = e.target.password.value;

    dispatch(updateUser(data));
  };

  return (
    <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <Input type="text" name="username" placeholder="username"/>
      <Input type="email" name="email" placeholder="email"/>
      <Input type="password" name="password" placeholder="password"/>
      <Button type="submit" buttonType="warning" name="Update" />
    </form>
  );
};

export default UpdateUserForm;
