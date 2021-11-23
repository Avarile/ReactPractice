import React, {useMemo} from 'react'


import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router'
import queryString from 'query-string'

// usage
const MyComponent =()=>{

  //Get the router object
  const router = useRouter()

  //get value from query string (?postId = 123) or router param(/:postId)
  console.log(router.query.postId)
}

export const useRouter = () => {
  const params = useParams()
  const location = useLocation()
  const 
}
