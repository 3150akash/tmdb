import * as React from "react";
import styles from "./layout.module.css"
const layout = (props) => {
    return (
        <div className={`panel panel-default`}>
            <header className={`panel-heading ${styles.header}`}>{props.header}</header>
            <div className="sideNav">
                {props.sideNav}
            </div>
            <div className="body">
                {props.mainContaint}
            </div>
            <footer className={`panel-footer ${styles.footer}`}>{props.footer}</footer>
        </div>)
}

export default layout;