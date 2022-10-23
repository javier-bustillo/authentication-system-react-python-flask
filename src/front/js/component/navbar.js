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
        <Link to="/login">
          <button className="btn btn-warning">Login</button>
        </Link>

        {store.auth ? (
          <div className="ml-auto">
            <button className="btn btn-primary" onClick={() => logout()}>
              Logout
            </button>
          </div>
        ) : (
          <div className="ml-auto">
            <button className="btn btn-primary">Login</button>
          </div>
        )}
      </div>
    </nav>
  );
};
