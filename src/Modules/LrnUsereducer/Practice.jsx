import React, { useState, useReducer } from 'react';


// Global variable
const init = {
  n: 0
};

const reducer = ( state, action ) => {
  if (action.type === "add"){
    return { n: state.n + action.number }
  } else if ( action.type === "multi" ){
    return { n: state.n * 2 } 
  } else {
    throw new Error("unknown Error")
  }
};


// Main Function
export default function Practice() {

  const [ state, dispatch ] = useReducer( reducer, init );
  const { n } = state;

  const onClick = () => {
    dispatch({ type: "add", number: 1})
  };

  const onClick2 = () => {
    dispatch({ type: "add", number: 2})
  };

  const onClick3 = () => {
    dispatch({ type: "multi"})
  }

  return (
    <div>
      <h1>n: {n}</h1>

      <button onClick={()=>onClick()}>+1</button>
      <button onClick={()=>onClick2()}>+2</button>
      <button onClick={()=>onClick3()}>*2</button>
    </div>
  )
}
