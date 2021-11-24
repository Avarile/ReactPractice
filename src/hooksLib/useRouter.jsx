import React, { useMemo } from "react"

import { useParams, useLocation, useHistory, useRouteMatch } from "react-router"
import queryString from "query-string"

// usage
const MyComponent = () => {
  //Get the router object
  const router = useRouter()

  //get value from query string (?postId = 123) or router param(/:postId)
  console.log(router.query.postId)
  return (
    <button
      onClick={(event) => {
        router.push("/about")
      }}>
      About
    </button>
  )
}

export const useRouter = () => {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()

  //return our custom router object
  //Memorize so that a new objectis only returned if something changed

  return useMemo(() => {
    return {
      // for convenience add push(), replace(), pathname ate top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // merge params and parsed query string into single "query" object
      // so that they can be used interchangeably
      // example: /:topic?sort=popular => {topic: "react", sort:"popular"}
      query: {
        ...queryString.parse(location.search), // convert string to object
        ...params,
      },
      match,
      location,
      history,
    }
  }, [params, match, location, history])
}
