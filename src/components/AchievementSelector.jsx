import React, { Component } from "react";
import { Button, Modal } from "reactstrap";
import { Achievements } from "../api/Data";
import { LocalAPI } from "../api/LocalAPI";

class AchievementTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openId: -1
    };
  }

  render() {
    const id = this.props.achievement.id;
    const title = this.props.achievement.title;
    const description = this.props.achievement.description;
    const icon = this.props.achievement.icon;
    const url = require(`assets/icons/${icon}.svg`);

    if (LocalAPI.has_achievement(id)) {
      return (
        <>
          <a className="achievementTab">
            <img alt="..." className="img-fluid greyed" src={url} />
          </a>
        </>
      );
    }

    return (
      <>
        <a
          className="achievementTab"
          onClick={() => this.setState({ openId: id })}
        >
          <img alt="..." className="img-fluid" src={url} />
        </a>
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.openId === id}
          toggle={() => this.setState({ openId: -1 })}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-default">
              {title}
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.setState({ openId: -1 })}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{description}</p>
          </div>
          <div className="modal-footer">
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.setState({ openId: -1 })}
            >
              Close
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export class AchievementSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      achievements: []
    };
  }

  componentDidMount() {
    // fetch tasks
    // API.get_achievements().then(result => {
    // });

    this.setState({
      loaded: true,
      achievements: Achievements
    });
  }

  render() {
    if (!this.state.loaded) {
      return <h2>Loading</h2>;
    }

    return (
      <>
        <div className={"achievementSelector"}>
          {this.state.achievements.map(achievement => {
            return (
              <AchievementTab key={achievement.id} achievement={achievement} />
            );
          })}
        </div>
      </>
    );
  }
}
