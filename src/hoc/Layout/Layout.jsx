import * as React from "react";
import styles from "./layout.module.css"
import { AppBar } from "@material-ui/core"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
const layout = (props) => {
    return (
        <div className="body">
            <AppBar position="sticky">
                <Toolbar>
                    {props.header}
                </Toolbar>
            </AppBar>
            <div className="sideNav">
                {props.sideNav}
            </div>
            <Grid lg={12}>
                {props.mainContaint}
            </Grid>
            <footer className={`${styles.footer}`}>{props.footer}</footer>
        </div>)
}

export default layout;