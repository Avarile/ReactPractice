import React from "react";

// Root pages
export const Login = React.lazy(() => import("./Login"));
export const MainEntrance = React.lazy(() => import("./MainEntrance"));
export const Fallback = React.lazy(() => import("./Fallback"));

// DashBoard pages
export const DashBoardMain = React.lazy(() => import("./DashBoardMain/DashBoardMain"));
export const OrderManagement = React.lazy(() => import("./OrderManagment/OrderManagement"));
export const Fabrication = React.lazy(() => import("./Fabrication/Fabrication"));
export const Shipping = React.lazy(() => import("./Shipping/Shipping"));
export const Delivery = React.lazy(() => import("./Delivery/Delivery"));
export const WareHousing = React.lazy(() => import("./WareHousing/WareHousing"));

// Functional components
export const Navbar = React.lazy(() => import("../views/Navbar"));
export const Footer = React.lazy(() => import("../views/Footer"));
export const SideMenu = React.lazy(() => import("../views/Sidemenu"));
