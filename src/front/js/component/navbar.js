import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const logout = () => {
    actions.logout();
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        {store.auth ? (
          <div className="ml-auto">
            <button className="btn btn-warning" onClick={() => logout()}>
              Logout
            </button>
          </div>
        ) : (
          <div className="ml-auto">
            <Link to="/">
              <button className="btn btn-success">Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
