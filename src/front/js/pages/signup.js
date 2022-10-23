import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { SignUpForm } from "../component/signUpForm";

export const Signup = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center m-5">
      <h1>Welcome</h1>
      <div className={{ maxWidth: "600px" }}>
        <SignUpForm />
      </div>
    </div>
  );
};
