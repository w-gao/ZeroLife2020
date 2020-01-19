
import React from "react";
import SideNav from "../components/SideNav";
import {Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import Loading from "../components/Loading";
import classnames from "classnames";

class News extends React.Component {
    state = {
        plainTabs: 1
    };
    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };

    render() {

        return (
            <>
                <SideNav/>

                <Container className="pt-lg-md main">
                    <Row className="justify-content-center">
                        <Col lg="10" className="category">
                            <h1>News</h1>
                            <div>

                                <Loading/>

                {/*                <div className="nav-wrapper">*/}
                {/*                    <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist">*/}
                {/*                        <NavItem>*/}
                {/*                            <NavLink*/}
                {/*                                aria-selected={this.state.plainTabs === 1}*/}
                {/*                                className={classnames("rounded-circle", {*/}
                {/*                                    active: this.state.plainTabs === 1*/}
                {/*                                })}*/}
                {/*                                onClick={e => this.toggleNavs(e, "plainTabs", 1)}*/}
                {/*                                href="#pablo"*/}
                {/*                                role="tab"*/}
                {/*                            >*/}
                {/*<span className="nav-link-icon d-block">*/}
                {/*  <i className="ni ni-atom"/>*/}
                {/*</span>*/}
                {/*                            </NavLink>*/}
                {/*                        </NavItem>*/}
                {/*                    </Nav>*/}
                {/*                </div>*/}
                {/*                <Card className="shadow">*/}
                {/*                    <CardBody>*/}
                {/*                        <TabContent activeTab={"plainTabs" + this.state.plainTabs}>*/}
                {/*                            <TabPane tabId="plainTabs1">*/}
                {/*                                <p className="description">*/}

                {/*                                </p>*/}
                {/*                            </TabPane>*/}
                {/*                        </TabContent>*/}
                {/*                    </CardBody>*/}
                {/*                </Card>*/}

                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default News;
