import { useState, useEffect } from 'react';

function useFetch (api)  {

  const [webFetch, setWebFetch] = useState ({data:null, isLoading: true})

  useEffect( () => {

    setWebFetch(webFetch=> ({data: webFetch.data, isLoading: true}))
    
    fetch(api)
      .then(x => x.text())
      .then(y=> setWebFetch({data: y, isLoading:false}))

  },[api, setWebFetch])

  return webFetch
}

export default useFetch;