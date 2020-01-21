import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledAlert
} from "reactstrap";
import { Redirect } from "react-router";
import { API } from "../api/API";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toHome: false,
      email: null,
      password: null
    };
  }

  componentDidMount() {}

  handleSubmit(props) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email);
    console.log(password);

    API.login(email, password, status => {
      console.log(status);

      if (status) {
        this.setState({ toHome: true });
      } else {
        this.setState({ alert: "Credentials don't match!" });
      }
    });
  }

  render() {
    if (this.state.toHome) {
      return <Redirect to="/home" />;
    }

    if (API.isLoggedIn()) {
      return <Redirect to="/home" />;
    }

    return (
      <Container className="pt-lg-md mt-3">
        <Row className="justify-content-center">
          <Col lg="5">
            {this.state.alert && (
              <UncontrolledAlert color="danger" fade={true}>
                <span className="alert-inner--icon">
                  <i className="ni ni-bell-55" />
                </span>
                <span className="alert-inner--text ml-1">
                  <strong>Info:</strong> {this.state.alert}
                </span>
              </UncontrolledAlert>
            )}

            <Card className="bg-secondary shadow border-0">
              <CardHeader className="px-lg-5 py-lg-3">
                <div>
                  <h2>Login</h2>
                </div>
              </CardHeader>
              <CardBody>
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        autoComplete="off"
                        placeholder="Password"
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="text-center">
                    <Button
                      className="my-4"
                      color="primary"
                      type="button"
                      onClick={() => this.handleSubmit()}
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
