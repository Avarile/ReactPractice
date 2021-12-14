import Dashboard from "views/Dashboard.js"
import UserProfile from "views/UserProfile.js"
import TableList from "views/TableList.js"
import Typography from "views/Typography.js"
import Icons from "views/Icons.js"
import Maps from "views/Maps.js"
import Notifications from "views/Notifications.js"
import Upgrade from "views/Upgrade.js"

const dashboardRoutes = [
  {
    upgrade: true,
    endPoint: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    view: "/admin",
  },
  {
    endPoint: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    view: "/admin",
  },
  {
    endPoint: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    view: "/admin",
  },
  {
    endPoint: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    view: "/admin",
  },
  {
    endPoint: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    view: "/admin",
  },
  {
    endPoint: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    view: "/admin",
  },
  {
    endPoint: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    view: "/admin",
  },
  {
    endPoint: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    view: "/admin",
  },
]

export default dashboardRoutes
