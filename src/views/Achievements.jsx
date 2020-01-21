import React from "react";
import SideNav from "../components/SideNav";
import { Col, Container, Row } from "reactstrap";
import { AchievementSelector } from "../components/AchievementSelector";

const Achievements = () => (
  <React.Fragment>
    <SideNav />

    <Container className="pt-lg-md main">
      <Row className="justify-content-center">
        <Col lg="10" className="category">
          <h1>Achievements</h1>
          <div>
            <AchievementSelector />
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Achievements;
