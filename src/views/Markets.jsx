import React, { useState } from "react";
import SideNav from "../components/SideNav";
import { Col, Container, Row } from "reactstrap";
import Loading from "../components/Loading";
import ApolloClient, { gql } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  uri: "https://ensenada-fxuevruz4a-uc.a.run.app/",
  cache: new InMemoryCache()
});

class Markets extends React.Component {
  render() {
    return (
      <>
        <SideNav />

        <Container className="pt-lg-md main">
          <Row className="justify-content-center">
            <Col lg="10" className="category">
              <h1>Markets</h1>
              <div>
                <Loading />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Markets;
