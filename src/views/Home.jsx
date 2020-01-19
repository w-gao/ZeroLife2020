
import React from "react";

import {
    Container,
    Row,
    Col, Button,
} from "reactstrap";
import {Link} from "react-router-dom";
import SideNav from "../components/SideNav";
import ProgressBar from "../components/ProgressBar";
import {LocalAPI} from "../api/LocalAPI";
import {Quests} from "../api/Data";

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

                            <Link to="/quests/daily">
                                <Button block className="tab bg-daily" color="secondary" size="lg" type="button">
                                    Daily
                                    <ProgressBar count={LocalAPI.get_tasks('daily').length} total={Quests['daily'].length} />
                                </Button>
                            </Link>
                            <Link to="/quests/kitchen">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    Kitchen
                                    <ProgressBar count={LocalAPI.get_tasks('kitchen').length} total={Quests['kitchen'].length} />
                                </Button>
                            </Link>
                            <Link to="/quests/groceries">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    Groceries
                                    <ProgressBar count={LocalAPI.get_tasks('groceries').length}  total={Quests['groceries'].length} />
                                </Button>
                            </Link>
                            <Link to="/quests/bathroom">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    Bathroom
                                    <ProgressBar count={LocalAPI.get_tasks('bathroom').length} total={Quests['bathroom'].length} />
                                </Button>
                            </Link>
                            <Link to="/quests/diy">
                                <Button block className="tab" color="secondary" size="lg" type="button">
                                    DIY
                                    <ProgressBar count={LocalAPI.get_tasks('diy').length} total={Quests['diy'].length} />
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
