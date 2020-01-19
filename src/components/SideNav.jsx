import React from "react";

class SideNav extends React.Component {

    render() {
        return (
            <div className="sidenav">
                <a href="/home">
                    <svg>
                        <image href={require("assets/icons/home.svg")} width="3rem"/>
                    </svg>
                </a>
                <a href="/achievements">
                    <svg>
                        <image href={require("assets/icons/trophy.svg")} width="3rem"/>
                    </svg>
                </a>
                <a href="/news">
                    <svg>
                        <image href={require("assets/icons/newspaper.svg")} width="3rem"/>
                    </svg>
                </a>
                <a href="/markets">
                    <svg>
                        <image href={require("assets/icons/store.svg")} width="3rem"/>
                    </svg>
                </a>

            </div>
        );
    }
}

export default SideNav;
