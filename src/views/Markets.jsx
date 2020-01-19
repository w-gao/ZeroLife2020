
import React from "react";
import SideNav from "../components/SideNav";
import {Col, Container, Row} from "reactstrap";
import Loading from "../components/Loading";

class Markets extends React.Component {

    render() {

        return (
            <>
                <SideNav/>

                <Container className="pt-lg-md main">
                    <Row className="justify-content-center">
                        <Col lg="10" className="category">
                            <h1>Markets</h1>
                            <div>
                                <Loading/>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Markets;
