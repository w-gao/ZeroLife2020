
import React from "react";
import SideNav from "../components/SideNav";
import {Col, Container, Row} from "reactstrap";
import Loading from "../components/Loading";

class News extends React.Component {

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

                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default News;
