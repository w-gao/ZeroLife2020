import React, {Component} from 'react';
import {Button, Modal, UncontrolledAlert} from "reactstrap";
import {API} from "../api/API";
import {getCategoryId, Quests} from "../api/Data";
import {LocalAPI} from "../api/LocalAPI";

class TaskTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openId: 0,
            alert: null
        }
    }

    componentDidMount() {


    }

    completeQuest(id, name) {
        const cid = getCategoryId(this.props.category);
        if (cid == null) return;

        // API.create_task(cid, name, "").then(() => {
        //     this.setState({ openId: 0 });
        // });

        LocalAPI.create_task(this.props.category, id);
        this.setState({openId: 0});
        let message = `Successfully completed quest: ${name}!`;

        for (let key in Quests[this.props.category]) {
            if (Quests[this.props.category].hasOwnProperty(key)) {
                if (id === Quests[this.props.category][key].id) {
                    LocalAPI.create_achievement(Quests[this.props.category][key].achievement);
                    // API.create_achievement(cid, Quests[this.props.category][key].achievement + "", "_");
                    message += " You unlocked an achievement!";
                    break;
                }
            }
        }

        this.props.action(message);
    }

    render() {

        const id = this.props.task.id;
        const title = this.props.task.title;
        const description = this.props.task.description;

        const tasks = LocalAPI.get_tasks(this.props.category);


        // API.get_tasks(this.props.category).then(result => {
        //     console.log(result.data.user.tasks)
        // });



        if (id > tasks.length + 2) {
            return (
                <>
                    <Button
                        className="tab disabled"
                    >
                        ?
                    </Button>
                </>
            )
        }

        return (
            <>
                <a
                    className="tab"
                    onClick={() => this.setState({openId: id})}
                >
                    {id}
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

                        {tasks.indexOf(id) === -1 && (
                            <Button onClick={() => this.completeQuest(id, title)} color="primary" type="button">
                                Complete
                            </Button>
                        )}

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

        // API.get_tasks().then(result => {
        //     console.log(result)
        // });

        const tasks = Quests[this.props.category];

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
                            <TaskTab key={task.id} task={task} category={this.props.category} action={this.handler}/>
                        )
                    })}
                </div>
            </>
        );
    }
}
