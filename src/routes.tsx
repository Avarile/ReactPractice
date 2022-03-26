import React from "react"
import { Navigate, useRoutes } from "react-router-dom"
import { Login, MainEntrance, Fallback } from "./pages"
type FallbackComponentT = boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null
type ChildComponentT = React.LazyExoticComponent<() => JSX.Element>

// loading the component async and display fallback component while loading.
const SuspenseWrapper = (Child: ChildComponentT, FallbackComponent?: FallbackComponentT) => {
  return (
    <React.Suspense fallback={FallbackComponent || <>...</>}> // utilize suspense to implement lazy loading
      <Child />
    </React.Suspense>
  )
}
export default () => {
  return useRoutes([
    {
      path: "/center",
      element: SuspenseWrapper(MainEntrance),
      children: [
        {
          path: "/center",
          element: SuspenseWrapper(MainEntrance),
        },
      ],
    },
    {
      path: "/",
      element: SuspenseWrapper(Login),
    },
    {
      path: "/404",
      element: SuspenseWrapper(Fallback),
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ])
}
