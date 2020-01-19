import React, {Component} from 'react';
import {Button, Modal, UncontrolledAlert} from "reactstrap";
import {API} from "../api/API";

class TaskTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openId: 0,
            alert: null
        }
    }

    completeQuest(id, name) {
        // API.update_task(id).then(() => {

        this.setState({openId: 0});
        this.props.action(`Successfully completed quest: ${name}!`)
        // });
    }

    render() {

        const id = this.props.task.id;
        const title = this.props.task.title;
        const description = this.props.task.description;
        const gradient = this.props.task.gradient;

        return (
            <>
                <a
                    className="tab"
                    onClick={() => this.setState({openId: id})}
                >
                    {title}
                </a>
                <Modal
                    className="modal-dialog-centered"
                    isOpen={this.state.openId === id}
                    toggle={() => this.setState({openId: 0})}
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
                            onClick={() => this.setState({openId: 0})}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="modal-footer">
                        <Button onClick={() => this.completeQuest(id, title)} color="primary" type="button">
                            Complete
                        </Button>
                        <Button
                            className="ml-auto"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.setState({openId: 0})}
                        >
                            Close
                        </Button>
                    </div>
                </Modal>
            </>
        )
    }
}

export class TaskSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            tasks: []
        };
        this.handler = this.handler.bind(this);
    }

    componentDidMount() {

        // fetch tasks

        API.get_tasks().then(result => {
            console.log(result)
        });


        const tasks = [
            {
                id: 1,
                title: "123",
                description: "AAA",
                gradient: 3
            },
            {
                id: 2,
                title: "123",
                description: "AAABBB",
                gradient: 4
            },
        ];

        this.setState({
            loaded: true,
            tasks: tasks
        });
    }

    handler(alert) {
        this.setState({
            alert: alert
        });
    }

    render() {
        if (!this.state.loaded) {
            return (
                <h2>Loading</h2>
            )
        }

        return (
            <>
                {this.state.alert && (
                    <UncontrolledAlert color="info" fade={true}>
          <span className="alert-inner--icon">
            <i className="ni ni-bell-55"/>
          </span>
                        <span className="alert-inner--text ml-1">
            <strong>Info:</strong> {this.state.alert}
          </span>
                    </UncontrolledAlert>
                )}
                <div className={"taskSelector"}>
                    {this.state.tasks.map((task) => {
                        return (
                            <TaskTab key={task.id} task={task} action={this.handler}/>
                        )
                    })}
                </div>
            </>
        );
    }
}
