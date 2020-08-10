import React, { FunctionComponent } from "react";
import "../styles/Container.css";
import ActionBar from "./ActionBar";

type ContainerProps = {
  currentView?: string;
};

export const Container: FunctionComponent<ContainerProps> = ({
  currentView,
  children,
}) => (
  <div id="container">
    <div id="actionBar">
      <ActionBar currentView={currentView} />
    </div>
    <div id="content">{children}</div>
  </div>
);

export default Container;
