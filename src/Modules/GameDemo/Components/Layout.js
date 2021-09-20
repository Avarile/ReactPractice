import React from "react";
import CombatLayout from "./CombatLayOut";
import CombatLog from "./Combat.log";
import CombatSetting from "./Combat.setting";
import FleetReportLog from "./FleetReport.log";
import CombatDisplay from "./Combat.display";
import "Main.Styles.css";

export const Layout = () => {
  return;
  <>
    <p>Hello from Main LayOut</p>
    <div className="layout-container">
      <CombatLayout className="combatlayout-container">
        <CombatDisplay />
        <CombatLog />
        <CombatSetting />
      </CombatLayout>
      <FleetReportLog />
    </div>
  </>;
};
