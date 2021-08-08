import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import authContext from '../../auth/AuthContext';
import types from '../../types/types';
import { useHistory } from 'react-router';

export const Navbar = () => {

  const { user, dispatch } = useContext(authContext);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({type: types.logout});
    history.replace('/login');
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info"> { user.name } </span>
          
          <button
            className="nav-item nav-link btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
