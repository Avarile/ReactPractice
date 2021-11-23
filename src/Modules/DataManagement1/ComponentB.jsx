import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { StateContext, DispatchContext } from './Context';

export default function ComponentB() {

  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const handleOnchangeEvent = ( event ) =>  {
    dispatch ({
      type: "CHANGE_NAME",
      payload: {
        name: event.target.value
      }
    })
  }

  return (
    <div>
      <input value={state.name} onChange={handleOnchangeEvent}/>
      <br />
      <ComponentC />
    </div>
  )
}
// while in <input > tag onChange={()=>handleOnchangeEvent()} is WRONG!!!!!!!!!!!!! 