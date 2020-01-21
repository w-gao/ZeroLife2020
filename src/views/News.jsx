import React from "react";
import SideNav from "../components/SideNav";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Loading from "../components/Loading";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadNews: false };
    this.timeout = null;
  }

  loadNews() {
    this.setState({ loadNews: true });
  }

  render() {
    this.timeout = setTimeout(() => this.loadNews(), 1000);

    return (
      <>
        <SideNav />

        <Container className="pt-lg-md main">
          <Row className="justify-content-center">
            <Col lg="10" className="category">
              <h1>News</h1>
              <div>
                {!this.state.loadNews && <Loading />}

                {this.state.loadNews && (
                  <>
                    <Card className="shadow mb-4">
                      <CardBody>
                        <img
                          alt="..."
                          className="img-fluid lazyload"
                          data-src={require(`assets/imgs/aliens-earth.svg`)}
                        />
                      </CardBody>
                    </Card>
                    <Card className="shadow mb-4">
                      <CardBody>
                        <img
                          alt="..."
                          className="img-fluid lazyload"
                          data-src={require(`assets/imgs/deadlyplastic.png`)}
                        />
                      </CardBody>
                    </Card>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

export default News;
