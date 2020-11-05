import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/store';
import { createPost } from '../../../assets/apicalls/createPost';
import checkAuth from '../../../assets/apicalls/checkAuth';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const CreatePost = () => {
  let loggedIn = useSelector(state => state.loggedin);
  let user = useSelector(state => state.userId);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target.post.value;
    let data = {
      text,
      user
    };
    if (checkAuth(loggedIn, dispatch)) createPost(data);
  };

  return (
    <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <Input type="text" name="post" placeholder="post"/>
      <Button type="submit" buttonType="primary" name="Publish post" />
    </form>
  );
};

export default CreatePost;
