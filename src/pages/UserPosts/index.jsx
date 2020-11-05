import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getUserPosts from '../../assets/apicalls/getUserPosts';
import Card from '../../components/Card';

const UserPosts = () => {
  const [showPosts, setShowPosts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getUserPosts(id)
    .then((response) => setShowPosts(response))
  }, []);

  const showPostsInCard = () => {
    if (typeof showPosts === 'object') {
      return showPosts.map((post) => <Card title='titre' post={post} user={post.user.username} />);
    } else {
      return `${showPosts} error: please login`;
    }
  };

  return (
    <>
      <h1 class="text-center">User id: {id}</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        { showPostsInCard() }
      </div>
    </>
  )
};

export default UserPosts;
