import React from 'react'

// Param is the boolean, with default 'false' value
export const useToggle = (initState = false) => {
  //init state
  const [state, setState] = React.useState(initState)
  //define and memorize toogler func in case we pass down the components
  const toggle = React.useCallback(()=> {
    setState(!state)
  },[state])

  return [state , toggle]
}


// Example: 

export const Example = () => {
  const [state, toggle] = useToggle()
  return (
    <button onClick={()=>{toggle()}}>{state ? 'toggled' : 'Click to toggle!'}</button>
  )
}
