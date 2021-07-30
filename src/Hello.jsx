import React, { useEffect } from 'react';

export default function Hello (){
  useEffect(()=>{
    console.log("render") ;
// useEffect will be 
    return () => {
      console.log("unmount");
    }
  }, [])


  return <div>Hello </div>
}