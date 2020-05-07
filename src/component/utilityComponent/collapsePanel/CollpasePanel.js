import React from "react"
import { IconButton } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Paper, Collapse, makeStyles, Divider, FormControl,
    InputLabel, MenuItem, Select, TextField, Checkbox,
    Button,
    Radio, RadioGroup, FormControlLabel, FormLabel
} from "@material-ui/core";
import clsx from "clsx";
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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: 200,
    },
}));
const CollapsePanel = (props) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.paper} style={{ marginBottom: "12px" }}>
            <h6 style={{display:"contents"}}>{props.sectionTitle}</h6>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
            <Divider />
            <p></p>
            <Collapse in={expanded} timeout="auto" unmountOnExit>

                {props.children}

            </Collapse>
        </Paper>
    )
}

export default CollapsePanel