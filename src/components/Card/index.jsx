import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, post, user }) => {
  return (
    <div className="card m-2" style={{width: "18rem"}}>
      <div className="card-body">
        <h6 className="card-text mb-2">{post.text}</h6>
        <Link className="card-link" to={`/users/${post.id}/posts`}>by {user}</Link>
      </div>
    </div>
  )
};

export default Card;
