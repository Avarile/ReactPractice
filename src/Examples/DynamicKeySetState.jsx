import React from "react"

export const Demo = () => {
  const [key, setKey] = React.useState("")
  const [state, setState] = React.useState({
    key1: "123",
    key2: "123",
    key3: "123",
  })

  return (
    <>
      <select
        value={key}
        onChange={(event) => {
          setKey(event.target.value)
        }}>
        <option value="key1">key1</option>
        <option value="key2">key2</option>
        <option value="key3">key3</option>
      </select>

      <p>{state.key1}</p>
      <p>{state.key2}</p>
      <p>{state.key3}</p>

      <input
        type="text"
        value={state[`${key}`]}
        onChange={(event) => {
          setState({
            ...state,
            [key]: event.target.value,
          })
        }}
      />
    </>
  )
}
