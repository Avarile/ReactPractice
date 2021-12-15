import { AvarileDisplay } from "./MockComponents"
import { EmilyDisplay } from "./MockComponents"
import { AureliaDisplay } from "./MockComponents"
import { AnastasiaDisplay } from "./MockComponents"
import { FamilyDisplay } from "./MockComponents"

const CustomRoutes = [
  {
    endPoint: "/avarile",
    name: "Avarile' component",
    icon: "This is the Icon props, I can acctually put a Icon here, but not now",
    component: AvarileDisplay,
    view: "/MockComponents",
  },
  {
    endPoint: "/emily",
    name: "Emily' component",
    icon: "This is the Icon props, I can acctually put a Icon here, but not now",
    component: EmilyDisplay,
    view: "/MockComponents",
  },
  {
    endPoint: "/aurelia",
    name: "Aurelia' component",
    icon: "This is the Icon props, I can acctually put a Icon here, but not now",
    component: AureliaDisplay,
    view: "/MockComponents",
  },
  {
    endPoint: "/anastasia",
    name: "Anastasia' component",
    icon: "This is the Icon props, I can acctually put a Icon here, but not now",
    component: AnastasiaDisplay,
    view: "/MockComponents",
  },
  {
    endPoint: "/family",
    name: "Family' component",
    familyMembers: { father: "Avarile", mother: "Emily", firstBorn: "Anastasia", secondBorn: "Aurelia" },
    component: FamilyDisplay,
    view: "/MockComponents",
  },
]

export default CustomRoutes
