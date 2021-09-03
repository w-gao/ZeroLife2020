import React, { useState, createContext, useContext } from "react";
import SideNav from "../components/SideNav";
import {
  Col,
  Container,
  Row,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../assets/css/argon-design-system-react.min.css";
import ApolloClient, { gql } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://ensenada-fxuevruz4a-uc.a.run.app/",
  cache: new InMemoryCache()
});

const featureCheckTernary = result => (result === "Y" ? "Yes" : "No");

const MarketQuery = zipcode => gql`
  {
    marketZipCode(zipcode: "${zipcode}") {
      _id
      FMID
      MarketName
      Website
      Facebook
      Twitter
      Youtube
      OtherMedia
      street
      city
      County
      State
      zip
      Location
      Credit
      SNAP
      Organic
      Bakedgoods
      Cheese
      Crafts
      WildHarvested
    }
  }
`;

const ZipCodeContext = createContext("94041");

const Markets = () => {
  const [zipcode] = useContext(ZipCodeContext);
  const { loading, error, data } = useQuery(MarketQuery(zipcode));
  if (loading) {
    return (
      <React.Fragment>
        <SideNav />
        <Container className="pt-lg-md main">
          <Row className="justify-content-center">
            <Col lg="10" className="category">
              <h1>Markets</h1>
              <div>
                Loading...
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
  if (error)
    return (
      <React.Fragment>
        <SideNav />
        <Container className="pt-lg-md main">
          <Row className="justify-content-center">
            <Col lg="10" className="category">
              <h1>Markets</h1>
              <div>
                <p>Oh no! {error.message} - perhaps the API is down :(</p>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <SideNav />
      <Container className="pt-lg-md main">
        <Row className="justify-content-center">
          <Col lg="10" className="category">
            <h1>Markets</h1>
            {data.marketZipCode.map((market, index) => (
              <React.Fragment key={index}>
                <br />
                <Card>
                  <CardBody>
                    <CardTitle>{market.MarketName}</CardTitle>
                    <CardSubtitle>
                      {market.street}, {market.city}, {market.State},{" "}
                      {market.zip}, {market.County}
                    </CardSubtitle>

                    <CardText>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between"
                        }}
                      >
                        <p>Credit: {featureCheckTernary(market.Credit)}</p>
                        <p>Snap: {featureCheckTernary(market.SNAP)}</p>
                        <p>Organic: {featureCheckTernary(market.Organic)}</p>
                        <p>
                          Bakedgoods: {featureCheckTernary(market.Bakedgoods)}
                        </p>
                        <p>Cheese: {featureCheckTernary(market.Cheese)}</p>
                        <p>Crafts: {featureCheckTernary(market.Crafts)}</p>
                        <p>
                          WildHarvested:{" "}
                          {featureCheckTernary(market.WildHarvested)}{" "}
                        </p>
                      </div>
                    </CardText>

                    <div
                      style={{
                        display: "flex",
                        direction: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <p>FMID: {market.FMID} </p>{" "}
                      <Button>
                        <a href={market.Website} target="__blank">
                          {market.MarketName} Site
                        </a>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
                <br />
              </React.Fragment>
            ))}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

const MarketApollo = () => {
  const [zipcode, setZipcode] = useState("94041");
  return (
    <ApolloProvider client={client}>
      <ZipCodeContext.Provider value={[zipcode, setZipcode]}>
        <Container className="pt-lg-md main">
          <div>
            <input
              placeholder="zipcode"
              type="number"
              value={zipcode}
              onChange={event => setZipcode(event.target.value)}
            />
          </div>
          <Markets />
        </Container>
      </ZipCodeContext.Provider>
    </ApolloProvider>
  );
};

export default MarketApollo;
