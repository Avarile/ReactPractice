import { useState } from 'react';

export const useForm = (initValues) =>  {
  const [values, setValues] = useState(initValues);

  // initValue传进来， 传到useState里面作为 values 的初始值

  return [
    values, 
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value // 给name=value的 组件中的Value赋值
    })
  }]
}

//  return an array, The 1st prop is the init Value passed in, 2nd is an event use setState to act as handler
