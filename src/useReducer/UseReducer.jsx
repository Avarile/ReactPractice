import React, { useState, useReducer } from "react";

function reducer(currentState, action) {
  switch (action.type) {
    case "add-todo": {
      return {
        todos: [
          ...currentState.todos,
          { text: action.payload, completed: false },
        ],
      };
    }
    case "toggle-todo": {
      return {
        todos: currentState.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }

    default:
      return currentState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState("");
  // state: {todos: []}

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", payload: text });
          setText(""); // setText("") is to reset is inputs within the Form
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      {state.todos.map((todo, index) => (
        <div
          key={todo.text}
          onClick={() => dispatch({ type: "toggle-todo", payload: index })}
          style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
          {todo.text}
        </div>
      ))}
      <pre>{JSON.stringify(state.todos, null, 2)}</pre>
    </>
  );
}
