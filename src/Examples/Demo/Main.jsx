import React from "react"
import { useState, useEffect } from "react"

export const Main = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [userIsValid, setUserIsValid] = useState(false)

  const [LoginformValue, LoginFormHandler] = useForm({
    userName: "",
    password: "",
  })

  useEffect(async () => {
    const users = await fetch("/userApi")
    if (
      users.forEach((user) => {
        user.UserName = LoginformValue.userName
      })
    ) {
      setUserIsValid(true)
    }
  }, [LoginformValue])

  return (
    <>
      <p>This is the Demo Login / Register page</p>

      {isLogin ? <Login formValue={LoginformValue} formHandler={LoginFormHandler} /> : <Register />}
    </>
  )
}

const Login = ({ formValue, formHandler }) => {
  return (
    <>
      <h2>Login</h2>
      <form>
        <input type="text" name="userName" placeholder="username" onChange={formHandler} />
        <input type="password" name="password" placeholder="password" onChange={formHandler} />
        <button
          onSubmit={() => {
            alert(formValue.userName, formValue.password)
          }}>
          Login
        </button>
      </form>
    </>
  )
}

const Register = () => {
  const [formData, handleChange] = useForm({
    userName: "",
    password: "",
  })
  return (
    <>
      <h2>Please fill your Detail</h2>
      <form>
        <input type="text" name="userName" placeholder="username" onChange={handleChange} />
        <input type="password" name="password" placeholder="password" onChange={handleChange} />
        <button
          onSubmit={() => {
            alert(formData.userName, formData.password)
          }}>
          Register
        </button>
      </form>
    </>
  )
}

const useForm = (initState) => {
  const [formValue, setFormValue] = useState(initState)

  return [
    formValue,
    (e) => {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      })
    },
  ]
}
