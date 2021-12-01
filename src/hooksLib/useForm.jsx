import React from "react"

export const useForm = (initValues) => {
  const [values, setValues] = React.useState(initValues)

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
    },
  ]
}

// Demo for useForm
// const Demo = () => {
//     const [formState, handleChange] = useForm({ username: "", password: "" });
//
//     return (
//         <div>
//             <input
//                 type='text'
//                 name="username"
//                 value={formState.username}
//                 onChange={handleChange}
//             />
//             <input
//                 type='password'
//                 name="password"
//                 value={formState.password}
//                 onChange={handleChange}
//             />
//         </div>
//     );
// };
