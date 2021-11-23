import React from  'react'
// 3 life cycle hooks will be NotImplemented

const useComponentWillMount = (callback) => {
  const willMount = React.useRef(true);
  if (willMount.current) {
    callback();
    willMount.current = false;
  }
};


const useComponentDidMount = (callback) => {
  React.useEffect(()=>{
    callback()
  },[])
}


