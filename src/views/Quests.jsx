import React from "react";

import { Container, Row, Col } from "reactstrap";
import SideNav from "../components/SideNav";
import { TaskSelector } from "../components/TaskSelector";

const Quests = props => (
  <React.Fragment>
    <SideNav />

    <Container className="pt-lg-md main">
      <Row className="justify-content-center">
        <Col lg="10" className="category">
          <h1>{props.match.params.id.toUpperCase()} Quests</h1>
          <div>
            <TaskSelector category={props.match.params.id} />
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Quests;
