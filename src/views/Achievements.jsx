import React from "react";
import SideNav from "../components/SideNav";
import { Col, Container, Row } from "reactstrap";
import { AchievementSelector } from "../components/AchievementSelector";

class Achievements extends React.Component {
  render() {
    return (
      <>
        <SideNav />

        <Container className="pt-lg-md main">
          <Row className="justify-content-center">
            <Col lg="10" className="category">
              <h1>Achievements</h1>
              <div>
                {/*<Loading/>*/}
                <AchievementSelector />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Achievements;
