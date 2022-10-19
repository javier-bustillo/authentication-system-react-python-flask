import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Form from "../component/form.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Sign In!!</h1>
      <div className={{ maxWidth: "600px" }}>
        <Form />
      </div>
    </div>
  );
};
