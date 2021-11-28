import React from 'react'

const useAxios = () => {
 // apiCall 
}
const FormList = ({ props, apiUrl }) => { 
  const FormList = () => {
    if (props) {
      switch (props.type) {
        case 'TABLE':
          return (
            <table>
              <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Family Status</th>
              </thead>
              <tbody>
                <td></td>
              </tbody>
            </table>
          )
        case 'SELECT':
          return (
            <select>
              {props.response.map(prop => { prop })}
            </select>
          )
        default:
          return (
            <Error value={props.error} />
          )
      }
    } else {
      const { response, error, isLoading } = useAxios(apiUrl)
      return (
        <FormList props={...response, error, isLoading } />
      )
    }
  }
  return (<FormList />)
}
export const FormListPropsInjector = (FormList) => {
  return function New(props) {
    return <FormList {...props} />
  }
}

const FatherComponent = ({ }) => {
  const FormList = FormListPropsInjector(FormList)
  return (
    <>
      <FormList {...customProps} />
      </>
  )
}