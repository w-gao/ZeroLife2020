import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";
import { TaskSelector } from "../components/TaskSelector";
import Loading from "../components/Loading";

class Quests extends React.Component {
  componentDidMount() {}

  render() {
    const title = this.props.match.params.id;

    return (
      <>
        <SideNav />

        <Container className="pt-lg-md main">
          <Row className="justify-content-center">
            <Col lg="10" className="category">
              <h1>{title.toUpperCase()} Quests</h1>
              <div>
                {/*<Loading/>*/}
                <TaskSelector category={title} />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Quests;
