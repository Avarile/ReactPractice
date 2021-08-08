import { Input } from "@material-ui/icons";
import React, { useState } from "react";

const Todo = () => {
  return (
    <>
      <p>Hello from todo</p>
    </>
  );
};

const Todos = () => {
  return (
    <>
      <p>Hello from todos</p>
    </>
  );
};

const Inputs = () => {
  const [todos, setState] = useState({
    todos: [],
  });
  return (
    <>
      <form
        onSubmit={(e) => {
          e.defaultPrevented;
          setState();
        }}
      >
        <label>Input your todos: </label>
        <input
          type="text"
          name="todo"
          onChange={(e) => setState(e.target.value)}
        />
      </form>
    </>
  );
};

export default function App() {
  return (
    <>
      <p>Hello from home</p>
      <Inputs></Inputs>
      <Todos></Todos>
    </>
  );
}
