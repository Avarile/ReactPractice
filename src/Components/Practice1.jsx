import React, { useState, useReducer } from 'react'

const reducerFunc = ( state, action ) => {
  switch(action.type){
    case 'increment' :
      return {
        ...state,
        count: state.count + 1
      }
    
    case 'deremenet' : 
      return {
        ...state,
        count: state.count - 1
      }

    default: 
      return state
  }
}

const initState = {
  count: 0, 
}

export default function Practice1() {

  const [ input, setInput ] = useState(0);
  const [ state, dispatch ] = useReducer(reducerFunc, initState)

  return (
    <>
      <div>
        <h1>Reducer Example</h1>

        <div>
            <label htmlFor="">Start Count:</label>
            <input type="number" 
            onChange={(e) => setInput(parseInt(e.target.value))} 
            value={input}
            />
            <br />
            <button>Initialize Counter</button>
        </div>

        <p>0</p>
        <button onClick={ () => dispatch({type: 'increment' })}>Increment</button>
        <button>Derement</button>
      </div>
    </>
  )
}

