import React from "react"

export const useLocalStorageState = (keyName, initValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const value = window.localStorage.getItem(keyName)
      if (value) {
        return JSON.parse(value)
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(initValue))
        return initValue
      }
    } catch (error) {
      return initValue
    }
  })

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue))
    } catch (error) {
      setStoredValue(newValue)
    }
  }

  return [storedValue, setValue]
}
