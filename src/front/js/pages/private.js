import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store } = useContext(Context);

  return (
    <>
      {store.auth === false ? (
        <Navigate to="/" />
      ) : (
        <div className="container justify-content-center">
          <h1>This is your Private Page.</h1>
          <br></br>
          <h2>You are already logged in.</h2>
        </div>
      )}
    </>
  );
};
