import React from "react";

import { Container, Row, Col } from "reactstrap";

class EarthAnimation extends React.Component {

    constructor(props) {
        super(props);
        this.state = { num: 1 };
    }

    updateAnimation() {
        let num = this.state.num;
        num++;
        if (num >= 12) {
            num = 1;
        }

        this.setState({num: num});
    }

    render() {

        setTimeout(
            () => {
                this.updateAnimation()
            }, 100
        );

        let num = this.state.num;
        const url = require(`assets/animations/loading/loadingg_${num}.svg`);

        return (
            <Container className="shape-container d-flex align-items-center py-lg">
                <div className="col px-0">
                    <Row className="align-items-center justify-content-center">
                        <Col className="text-center" lg="6">

                            <img
                                alt="..."
                                className="img-fluid"
                                src={require(`assets/animations/earth/greyearth.svg`)}
                                style={{ width: "50rem" }}
                            />


                            <img
                                alt="..."
                                className="img-fluid"
                                src={url}
                                style={{ width: "50rem" }}
                            />

                        </Col>
                    </Row>
                </div>
            </Container>

        );
    }
}

export default EarthAnimation;
