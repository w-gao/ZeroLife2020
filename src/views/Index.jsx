import React from "react";

import "../assets/css/App.css";

import { Redirect } from "react-router";
import { Button, Container, Row } from "reactstrap";
import CountUp from "react-countup";

/**
 * Introduction page; displays beginning animation.
 */
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticks: 0, redirect: false, timeout: undefined };
    this.timeout = null;
  }

  tick() {
    let ticks = this.state.ticks;
    ticks++;
    this.setState({ ticks: ticks });
  }

  getStarted() {
    localStorage.setItem("offline", "true");
    this.setState({ redirect: true });
  }

  render() {
    // // check log in
    // if (localStorage.getItem('token') !== null || localStorage.getItem('offline') !== null) {
    //     return <Redirect to="/home"/>;
    // }

    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }

    if (this.state.ticks < 5) {
      this.timeout = setTimeout(() => {
        this.tick();
      }, 5000);
    }

    let ticks = this.state.ticks;

    const textBox = msg => (
      <div className="fadein card m-2">
        <h3 className="m-3">{msg}</h3>
      </div>
    );

    const statsBox = msg => (
      <div className="fadein intro-stats m-2">
        <h5 className="font-weight-bold">{msg}</h5>
      </div>
    );

    return (
      <Container className="fadein shape-container d-flex align-items-center py-md">
        <div className="col px-0">
          <div className="fadeout">
            {ticks <= 4 && (
              <Row className="align-items-center justify-content-center">
                <div className="card fadein">
                  <h3 className="m-2">
                    <CountUp end={2100} start={2020} duration={100} />
                  </h3>
                </div>
              </Row>
            )}
            {ticks <= 4 && (
              <Row className="align-items-center justify-content-center">
                <>
                  {ticks === 0 && statsBox("API: 500")}
                  {ticks === 1 && statsBox("Waste: 99%")}
                  {ticks === 2 && statsBox("Happiness: :c")}

                  <img
                    alt="..."
                    className="img-fluid intro-earth rotateImage"
                    src={require(`assets/animations/earth/greyearth.png`)}
                    style={{ width: "12rem" }}
                  />

                  <img
                    alt="..."
                    className="img-fluid intro-clouds"
                    src={require(`assets/animations/earth/grey-clouds.png`)}
                    style={{ width: "20rem" }}
                  />
                </>
              </Row>
            )}
          </div>

          <Row className="align-items-center justify-content-center">
            {ticks === 0 && textBox("The earth has seen better days.")}
            {ticks === 1 &&
              textBox(
                "It feels grey and gloomy now, but that doesn't mean we don’t have hope."
              )}
            {ticks === 2 &&
              textBox(
                "The change we need is in the hands of people like me and you."
              )}
            {ticks === 3 &&
              textBox("You can keep doing the things you love everyday")}
            {ticks === 4 &&
              textBox("while contributing to the cause and living healthier.")}

            {ticks >= 5 && (
              <div className="intro-play fadein">
                <h1>Zero Life</h1>
                <h2>Welcome to plan Zero. </h2>
                {/*<h3>First thing that we’ll do is teach you how it works.</h3>*/}

                <br />
                <Button
                  block
                  onClick={() => {
                    this.getStarted();
                  }}
                  color="primary"
                  type="button"
                >
                  Get started!
                </Button>
              </div>
            )}
          </Row>

          {ticks <= 4 && (
            <Row className="align-items-center justify-content-center">
              <Button
                className="fadeout fadein"
                onClick={() => {
                  this.setState({ ticks: 6 });
                }}
              >
                Skip
              </Button>
            </Row>
          )}
        </div>
      </Container>
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

export default Index;
