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

import React from 'react'

const PropInjector = ({ type, form }) => {
  return function New(params) {
    switch (type) {
      case 'input':
        return <input {...params} />
    
      case 'option':
        return (
          <form>
            <select name={params.name1} id={params.selectId}>
              <option value={params.optionTitle}>{params.optionTitle}</option>
              {params.data.map(data => (
                <option value={data.value} key={data.id}>{ data.name}</option>
              ))}
            </select>
          </form>
        )

      default:
        break;
    }
    return <Function {...params} />
  }
}

const Form = () => {
//  ...
}









