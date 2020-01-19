import React from "react";

import {Container, Row} from "reactstrap";
import {Redirect} from "react-router";

class EarthAnimation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ticks: 0};
    }

    tick() {
        let ticks = this.state.ticks;
        ticks++;
        this.setState({ticks: ticks});
    }

    render() {

        setTimeout(
            () => {
                this.tick()
            }, 5000
        );

        let ticks = this.state.ticks;

        const textBox = (msg) => (
            <div className="fadein card" onClick={() => this.tick()}>
                <h1 className="m-4">{msg}</h1>
            </div>
        );

        if(ticks >= 6) {
            return <Redirect to="/home"/>
        }

        return (
            <Container className="shape-container d-flex align-items-center py-lg">
                <div className="col px-0">
                    <Row className="align-items-center justify-content-center">

                        {/*<Button*/}
                        {/*    className="mt-4"*/}
                        {/*>*/}
                        {/*    2050*/}
                        {/*</Button>*/}

                        {ticks <= 4 && (
                            <img
                                alt="..."
                                className="img-fluid fadein rotateImage"
                                src={require(`assets/animations/earth/greyearth.png`)}
                                style={{width: "25rem" }}
                            />
                        )}

                    </Row>
                    <Row className="align-items-center justify-content-center">

                        {ticks === 0 && textBox('The earth has seen better days.')}
                        {ticks === 1 && textBox('It feels grey and gloomy now, but that doesn\'t mean we don’t have hope.')}
                        {ticks === 2 && textBox('The change we need is in the hands of people like me and you.')}
                        {ticks === 3 && textBox('You can keep doing the things you love everyday')}
                        {ticks === 4 && textBox('while contributing to the cause and living healthier.')}

                        {ticks >= 5 && (
                            <>
                                <h1 className="brand-name font-weight-bold fadein">Zero Life</h1>
                                <h2>Welcome to plan Zero. First thing that we’ll do is teach you how it works.</h2>
                            </>
                        )}
                    </Row>
                </div>
            </Container>

        );
    }
}

export default EarthAnimation;
