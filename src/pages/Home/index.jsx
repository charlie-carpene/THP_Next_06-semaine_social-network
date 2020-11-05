import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CreatePost from './Post';
import getAllPosts from '../../assets/apicalls/getAllPost';
import Card from '../../components/Card';

const Home = () => {
  const [showPosts, setShowPosts] = useState([]);
  const loggedin = useSelector(state => state.loggedin);

  useEffect(() => {
    getAllPosts()
    .then((response) => setShowPosts(response))
  }, [loggedin]);

  const showPostsInCard = () => {
    if (showPosts.length !== 0) {
      console.log(showPosts);
      return showPosts.map((post) => {
        let username ='';
        post.user ? username = post.user.username : username = "no name";
        return <Card title='titre' post={post} user={username} />;
      });
    } else {
      return `${showPosts} error: please login`;
    }
  };

  return (
    <>
      <h1 class="text-center">HOME</h1>
      <CreatePost />
      <div className="d-flex flex-row flex-wrap justify-content-center">
        { showPostsInCard() }
      </div>
    </>
  )
};

export default Home;
