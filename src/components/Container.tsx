import React, { FunctionComponent } from "react";
import "../styles/Container.css";

type ContainerProps = {
  actionBar?: any;
};

export const Container: FunctionComponent<ContainerProps> = ({
  actionBar,
  children,
}) => (
  <div id="container">
    <div id="actionBar">{actionBar}</div>
    <div id="content">{children}</div>
  </div>
);

export default Container;
