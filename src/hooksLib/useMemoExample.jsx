import React, { useState } from "react"

// const memorizedResult = useMemo(() => {
//   return expensiveFunction(propA, propB)
// },[propA,propB])

const FactoryOf = (number) => {
  console.log("factoryof(Number) called!")
  return number <= 0 ? 1 : number * FactoryOf(number - 1)
}

export const CaculateFactory = () => {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  // const factory = FactoryOf(number)
  const factory = React.useMemo(() => {
    FactoryOf(number)
  }, [number])

  const onChange = (event) => {
    setNumber(Number(event.target.value))
  }

  const onClick = () => {
    setInc((i) => i + 1)
  }

  return (
    <>
      <p>FactoryOf</p>
      <input type="number" value={number} onChange={onChange} />
      <p>is {factory}</p>
      <button onClick={onClick}> Re-render</button>
      <p>{inc}</p>
    </>
  )
}

// useCallback VS useMemo
// in other words, useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values. The difference is that useCallback returns its function when dependencies change while useMemo calls its function and returns the results
