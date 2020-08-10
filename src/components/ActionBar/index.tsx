import React, { FunctionComponent } from "react";
import "../../styles/ActionBar.css";

type ActionBarProps = {
  currentView?: string;
};

export const ActionBar: FunctionComponent<ActionBarProps> = ({
  currentView,
}) => {
  return (
    <div id="actionBarContainer">
      <div className="actionBarButton">Button 1</div>
      <div className="actionBarButton">Button2</div>
    </div>
  );
};

export default ActionBar;
