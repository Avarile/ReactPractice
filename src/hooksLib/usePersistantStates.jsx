import React from "react"

const usePersistantState = (stateName, initValue) => {
  const [value, setValue] = React.useState(initValue)
  const stateNameRef = React.useRef(stateName)

  React.useEffect(() => {
    try {
      const storedState = localStorage.getItem(stateName)
      if (storedState !== null) {
        setValue(storedState)
      } else {
        localStorage.setItem(stateName, value)
      }
    } catch {
      setValue(initValue)
    }
  })

  React.useEffect(() => {
    try {
      localStorage.setItem(stateNameRef.current, value)
    } catch {}
  }, [value])

  React.useEffect(() => {
    const lastiStateName = stateNameRef.current
    if (stateName !== lastiStateName) {
      localStorage.setItem(stateName, value)
      stateNameRef.current = stateName
      localStorage.removeItem(lastiStateName)
    }
  }, [stateName])

  return [value, setValue]
}

// Example
export const Demo = () => {
  const [name, setName] = React.useState("My-Fucking-Value")
  return (
    <>
      <MyComponent name={name} />
      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
      />
    </>
  )
}

const MyComponent = ({ name }) => {
  const [value, setValue] = usePersistantState(name, 10)
  return (
    <input
      value={value}
      onChange={(event) => {
        setValue(event.target.value)
      }}
    />
  )
}
