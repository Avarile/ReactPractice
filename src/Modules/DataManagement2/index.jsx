import React, { useState } from "react";
import useForm from "./useHooks/useForm";
// import ComponentA from "./Components/ComponentA";

export default function index() {
  const [values, setValues] = useForm({ username: "", password: "" });
  // const [showComponentA, setShowComponentA] = useState(true);

  return (
    <div>
      <ComponentA />
      <br />

      <input
        name="username"
        placeholder="Please Input your UserName: "
        onClick={(e) => setValue(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Please Input your Password: "
        onClick={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
