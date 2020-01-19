
import React from "react";

import '../assets/css/App.css';

import Loading from "../components/Loading";
import {Redirect} from "react-router";

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {toRegister: false};
  }

  componentDidMount() {
  }


  render() {

    setTimeout(
        () => {
          this.setState({ toRegister: true })
        }, 3000
    );

    if (this.state.toRegister) {
      return (<Redirect to="/register" />)
    }

    return (
      <>
        <main ref="main">

          <Loading />

        </main>
      </>
    );
  }
}

export default Index;
