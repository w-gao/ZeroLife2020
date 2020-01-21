import React from "react";

import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import SideNav from "../components/SideNav";
import ProgressBar from "../components/ProgressBar";
import { LocalAPI } from "../api/LocalAPI";
import { Quests } from "../api/Data";

class Home extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <SideNav />
        <Container className="pt-lg-md main">
          <Row className="justify-content-center">
            <Col lg="10" className="category">
              <h1 className="mb-0">HOME</h1>
              <p>Choose a category...</p>

              <Link to="/quests/daily">
                <Button
                  style={{
                    backgroundImage: `url("https://trello-attachments.s3.amazonaws.com/5e24727e666e612ea77156d2/1108x714/aba9736c49cba08ca9f6fefa19ebfa58/daily.jpg")`,
                    backgroundSize: "fill",
                    backgroundRepeat: "no-repeat",
                    filter: "grayscale(40%)",
                    width: "100%",
                    height: "30%"
                  }}
                  block
                  className="tab bg-daily"
                  color="secondary"
                  size="lg"
                  type="button"
                >
                  Daily
                  <ProgressBar
                    count={LocalAPI.get_tasks("daily").length}
                    total={Quests["daily"].length}
                  />
                </Button>
              </Link>
              <Link to="/quests/kitchen">
                <Button
                  style={{
                    backgroundImage: `url("https://trello-attachments.s3.amazonaws.com/5e21579585f896724222c892/5e24727e666e612ea77156d2/8b228800dcf36abd33fcafa6dda7fd72/kitchen.jpg")`,
                    backgroundSize: "fill",
                    backgroundRepeat: "no-repeat",
                    filter: "grayscale(40%)",
                    width: "100%",
                    height: "30%"
                  }}
                  block
                  className="tab"
                  color="secondary"
                  size="lg"
                  type="button"
                >
                  Kitchen
                  <ProgressBar
                    count={LocalAPI.get_tasks("kitchen").length}
                    total={Quests["kitchen"].length}
                  />
                </Button>
              </Link>
              <Link to="/quests/groceries">
                <Button
                  style={{
                    backgroundImage: `url("https://trello-attachments.s3.amazonaws.com/5e21579585f896724222c892/5e24727e666e612ea77156d2/78d69ebd27a7fb1bb2ff097e23da9fcc/groceries.jpg")`,
                    backgroundSize: "fill",
                    backgroundRepeat: "no-repeat",
                    filter: "grayscale(40%)",
                    width: "100%",
                    height: "30%"
                  }}
                  block
                  className="tab"
                  color="secondary"
                  size="lg"
                  type="button"
                >
                  Groceries
                  <ProgressBar
                    count={LocalAPI.get_tasks("groceries").length}
                    total={Quests["groceries"].length}
                  />
                </Button>
              </Link>
              <Link to="/quests/bathroom">
                <Button
                  style={{
                    backgroundImage: `url("https://trello-attachments.s3.amazonaws.com/5e21579585f896724222c892/5e24727e666e612ea77156d2/d21d3681755664677d0e059adeae07a3/bathroom.jpg")`,
                    backgroundSize: "fill",
                    backgroundRepeat: "no-repeat",
                    filter: "grayscale(40%)",
                    width: "100%",
                    height: "30%"
                  }}
                  block
                  className="tab"
                  color="secondary"
                  size="lg"
                  type="button"
                >
                  Bathroom
                  <ProgressBar
                    count={LocalAPI.get_tasks("bathroom").length}
                    total={Quests["bathroom"].length}
                  />
                </Button>
              </Link>
              <Link to="/quests/diy">
                <Button
                  style={{
                    backgroundImage: `url("https://trello-attachments.s3.amazonaws.com/5e21579585f896724222c892/5e24727e666e612ea77156d2/4eacba6fb0f9872299705577d62ade81/diy.jpeg")`,
                    backgroundSize: "fill",
                    backgroundRepeat: "no-repeat",
                    filter: "grayscale(40%)",
                    width: "100%",
                    height: "30%"
                  }}
                  block
                  className="tab"
                  color="secondary"
                  size="lg"
                  type="button"
                >
                  DIY
                  <ProgressBar
                    count={LocalAPI.get_tasks("diy").length}
                    total={Quests["diy"].length}
                  />
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
