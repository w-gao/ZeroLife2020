import React from "react";
import {Progress} from "reactstrap";

class ProgressBar extends React.Component {
    render() {
        const count = this.props.count;
        const total = this.props.total;

        return (
            <div className="progress-wrapper">
                <div className="progress-info">
                    <div className="progress-label">
                        <span>Completed ({count}/{total})</span>
                    </div>
                    <div className="progress-percentage">
                        <span>{Math.round(count / total * 100 )}%</span>
                    </div>
                </div>
                <Progress max={total} value={count} color="default" />
            </div>
        );
    }
}

export default ProgressBar;
