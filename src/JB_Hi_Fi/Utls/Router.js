import React from "react"
import { MainSelectionTable } from "../Components/SubComponents.jsx/MainSelectionView/MainSelectionTable"
import { Weaponary } from "../Components/SubComponents.jsx/MainSelectionView/Weaponary"
import { AssualtTroops } from "../Components/SubComponents.jsx/MainSelectionView/AssualtTroops"

export const routesMap = [
  // login: {
  //   name: "login-screen",
  //   icon: "   ",
  //   path: "/login",
  //   exact: true,
  //   component: React.lazy(() => import("./login")),
  //   key: uuid(),
  // },
  {
    name: "FlagShip",
    icon: "stillThinking",
    path: "/maincontent",
    exact: true,
    component: MainSelectionTable,
    key: 1,
    layout: "/admin",
    subroutes: [{ name: "" }],
  },
  {
    name: "Weaponary",
    icon: "stillThinking",
    path: "/weaponary",
    exact: true,
    component: Weaponary,
    key: 2,
    layout: "/admin",
  },
  {
    name: "AssualtTroop",
    icon: "stillThinking",
    path: "/assualttroop",
    exact: true,
    component: AssualtTroops,
    key: 3,
    layout: "/admin",
  },

  // shipConfig: {
  //   name: "shipConfig-screen",
  //   icon: "stillThinking",
  //   path: "/shipconfig",
  //   exact: true,
  //   component: React.lazy(() => import("./shipConfig")),
  //   key: uuid(),
  // },
  // personel: {
  //   name: "personel-screen",
  //   icon: "stillThinking",
  //   path: "/personal",
  //   exact: true,
  //   component: React.lazy(() => import("./personel")),
  //   key: uuid(),
  // },
]
// const dashboardRoutes = [
//   {
//     upgrade: true,
//     path: "/upgrade",
//     name: "Upgrade to PRO",
//     icon: "nc-icon nc-alien-33",
//     component: Upgrade,
//     layout: "/admin",
//   },
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     icon: "nc-icon nc-chart-pie-35",
//     component: Dashboard,
//     layout: "/admin",
//   },
//   {
//     path: "/user",
//     name: "User Profile",
//     icon: "nc-icon nc-circle-09",
//     component: UserProfile,
//     layout: "/admin",
//   },
//   {
//     path: "/table",
//     name: "Table List",
//     icon: "nc-icon nc-notes",
//     component: TableList,
//     layout: "/admin",
//   },
//   {
//     path: "/typography",
//     name: "Typography",
//     icon: "nc-icon nc-paper-2",
//     component: Typography,
//     layout: "/admin",
//   },
//   {
//     path: "/icons",
//     name: "Icons",
//     icon: "nc-icon nc-atom",
//     component: Icons,
//     layout: "/admin",
//   },
//   {
//     path: "/maps",
//     name: "Maps",
//     icon: "nc-icon nc-pin-3",
//     component: Maps,
//     layout: "/admin",
//   },
//   {
//     path: "/notifications",
//     name: "Notifications",
//     icon: "nc-icon nc-bell-55",
//     component: Notifications,
//     layout: "/admin",
//   },
// ]

// export default dashboardRoutes

// lazy load examply

// The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.

// import React, { Suspense } from 'react';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

// function MyComponent() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <section>
//           <OtherComponent />
//           <AnotherComponent />
//         </section>
//       </Suspense>
//     </div>
//   );
// }

// Route based code-splitting example:

// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//       </Switch>
//     </Suspense>
//   </Router>
// );
