import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Form from "../component/form.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center m-5">
      <h1>Welcome</h1>
      <div className={{ maxWidth: "600px" }}>
        <Form />
      </div>
    </div>
  );
};
