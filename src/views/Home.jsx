
import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col, Button, Progress,
} from "reactstrap";
import {Link} from "react-router-dom";
import SideNav from "../components/SideNav";

class Home extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <>
                <SideNav/>

                <Container className="pt-lg-md main">
                    <Row className="justify-content-center">
                        <Col lg="10" className="category">
                            <h1 className="mb-0">HOME</h1>
                            <p>Choose a category...</p>

                            <Link to="/quests/bath">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    BATH
                                </Button>
                            </Link>
                            <Link to="/quests/kitchen">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    KITCHEN

                                    {/*<div className="progress-wrapper">*/}
                                    {/*    <div className="progress-info">*/}
                                    {/*        <div className="progress-label">*/}
                                    {/*            <span>Completed (25/100)</span>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="progress-percentage">*/}
                                    {/*            <span>40%</span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <Progress max="100" value="25" color="default" />*/}
                                    {/*</div>*/}

                                </Button>
                            </Link>
                            <Link to="/quests/...">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    ...
                                </Button>
                            </Link>
                            <Link to="/quests/...">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    ...
                                </Button>
                            </Link>
                            <Link to="/quests/...">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    ...
                                </Button>
                            </Link>
                            <Link to="/quests/...">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    ...
                                </Button>
                            </Link>
                            <Link to="/quests/...">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    ...
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;
