import * as React from "react";

const layout = (props) => {
    return (
        <div className="panel panel-default">
            <header className="panel-heading">{props.header}</header>
            <div className="sideNav">
                {props.sideNav}
            </div>
            <div className="body">
                {props.mainContaint}
            </div>
            <footer className="panel-footer">{props.footer}</footer>
        </div>)
}

export default layout;