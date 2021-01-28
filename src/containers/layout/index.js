import React from "react";
import { Container } from "reactstrap";
const Layout = (props) => (
  <Container className="container">{props.children}</Container>
);

export default Layout;
