import React, { useReducer } from 'react';
import ComponentB from './ComponentB';
import reducer from './Actions';
import { StateContext, DispatchContext, initState } from './Context';

export default function ComponentA  () {

  const [ state, dispatch ] = useReducer( reducer, initState );



  return (
    <StateContext.Provider value = {state}>
      <DispatchContext.Provider value = {dispatch}>
        <div>
          <h1>useReducer and useContext Demo</h1>
          <ComponentB />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}
// in Component A, we are creating State and dispatch from useReducer. useReducer uses the reducer function and initState. using stateContext and dispatchContext we make them available to all child components.