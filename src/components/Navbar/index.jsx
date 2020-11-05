import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const Navbar = () => {
  let loggedIn = useSelector(state => state.loggedin);
  let history = useHistory();

  const logout = () => {
    Cookies.remove('token');
    history.push("/");
  };

  return (
    <nav className="my-2 navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="w-100 navbar-nav d-flex justify-content-between align-items-center">
          <div>
            <Link className="mx-1" to="/about">Later1</Link>
            <Link className="mx-1" to="/works">Later2</Link>
          </div>
          <div>
          {loggedIn ?
            <>
              <Link className="mx-1" to="/profil">Profil</Link>
              <button className="btn btn-warning" onClick={() => logout()}>Log out</button>
            </> :
            <>
              <Link className="mx-1" to="/register">Register</Link>
              <Link className="mx-1" to="/login">Login</Link>
            </>
          }
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
