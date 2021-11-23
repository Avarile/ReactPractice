import React, { useContext } from 'react';
import { StateContext, DispatchContext } from './Context';

export default function ComponentC() {

  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const handleReset = () => {
    dispatch({
      type: "RESET"
    })
  }

  return (
    <div>
      <input value={state.name} />
      <button onClick={()=>handleReset()}>Reset the Text Area</button>
    </div>
  )
}
