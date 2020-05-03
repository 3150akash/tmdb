import React from "react"
import Grid from '@material-ui/core/Grid';
import { Paper, makeStyles } from "@material-ui/core";

const Heading = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            width: "100%",
            color: theme.palette.text.secondary,
            textAlign: "left",
            textTransform: "capitalize"
        },
    }));
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.paper}>{`${props.masterCategory} ${props.subCategory}`}</Paper>
    )
}
export default Heading