import React, { useState } from "react"
import Form from 'react-boostrap/Form'
import styled from 'styled-component'

// const MobilePhone = ({ id, name }) => {
//   return (
//     <div>
//       <p>ID : {id}</p>
//       <p>Name: {name}</p>
//     </div>
//   )
// }
//
// const MobilePropsFactory = (Func ) => {
//     return function New(props) {
//         return <Func {...props} />
//   }
// }
//
// export const BackPack = () => {
//   const Iphone = MobilePropsFactory(MobilePhone)
//
//   return (
//     <>
//       <Iphone name="Iphone11" id="1" />
//       <Iphone name="Iphone12" id="2" />
//       <Iphone name="Iphone13" id="3" />
//     </>
//   )
// }



const CustomForm = (Form) => {
    return function New(props){
        const AlteredForm = styled(Form)`
         Css ....
        `
        return <AlteredForm  {...props}/>
}



Object.key(xxx) 
