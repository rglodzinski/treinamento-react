import React from "react";
import { Button as ReactstrapButton } from "reactstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Bootstrap = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ReactstrapButton outline color="danger">
            Reactstrap Button
          </ReactstrapButton>
        </Col>
        <Col>
          <Button variant="outline-primary">React Bootstrap Button</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Bootstrap;
