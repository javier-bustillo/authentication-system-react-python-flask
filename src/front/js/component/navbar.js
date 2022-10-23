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
        {/* <Link to="/">
          <button className="btn btn-warning">Login</button>
        </Link>
 */}
        {store.auth ? (
          <Link to="/">
            <div className="ml-auto">
              <button className="btn btn-warning" onClick={() => logout()}>
                Logout
              </button>
            </div>
          </Link>
        ) : (
          <div className="ml-auto">
            <button className="btn btn-primary">Login</button>
          </div>
        )}
      </div>
    </nav>
  );
};
