import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Login, MainEntrance, Fallback } from "./pages";

type FallbackComponentT = boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null;
type ChildComponentT = React.LazyExoticComponent<() => JSX.Element>;

// loading the component async and display fallback component while loading.
const SuspenseWrapper = (Child: ChildComponentT, Fallback?: FallbackComponentT) => {
  return (
    <React.Suspense fallback={Fallback || <>...</>}>
      {" "}
      // utilize suspense to implement lazy loading
      <Child />
    </React.Suspense>
  );
};

// RouteIntegration
export const RouteIntegration = () => {
  return useRoutes([
    {
      path: "/",
      element: SuspenseWrapper(Login),
    },
    {
      path: "/mainEntrance",
      element: SuspenseWrapper(MainEntrance),
      children: [
        {
          index: true,
          element: SuspenseWrapper(DashBoardMain),
        },
        {
          path: "/mainEntrance/orderManagement",
          element: SuspenseWrapper(OrderManagement),
        },
        {
          path: "/mainEntrance/fabricationManagement",
          element: SuspenseWrapper(FabricationManagement),
        },
        {
          path: "/mainEntrance/shippingManagement",
          element: SuspenseWrapper(ShippingManagement),
        },
        {
          path: "/mainEntrance/deliveryManagement",
          element: SuspenseWrapper(DeliveryManagement),
        },
        {
          path: "/mainEntrance/wareHousingManagement",
          element: SuspenseWrapper(WareHousingManagement),
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
};

// Dashboard route
// return useRoutes([
//   {
//     path: "/mainEntrance",
//     element: SuspenseWrapper(MainEntrance),
//     children: [
//       {
//         path: "/mainEntrance",
//         element: SuspenseWrapper(MainEntrance),
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: SuspenseWrapper(Login),
//   },
//   {
//     path: "/404",
//     element: SuspenseWrapper(Fallback),
//   },
//   { path: "*", element: <Navigate to="/404" replace /> },
// ]);
