import React from "react"
import {
    Paper, makeStyles, Divider, FormControl,
    InputLabel, MenuItem, Select, TextField, Checkbox,
    Button,
    Radio, RadioGroup, FormControlLabel, FormLabel
} from "@material-ui/core";
import genres from "./genres";
import certification from "./certification";
import sortingValues from "./sortingValues";
import languages from "./language";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RangeSlider from "../utilityComponent/Range/range";
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

const SortAndSearch = (props) => {
    const classes = useStyles();
    return (
        <>
            <Paper elevation={3} className={classes.paper} style={{ marginBottom: "12px" }}>
                <h6>Sort</h6>
                {/* <ExpandMoreIcon /> */}
                <Divider />
                <p></p>
                <FormControl style={{ width: "100%" }} variant="outlined" className={classes.formControl}>
                    <InputLabel id="sort-by">Sort Result By</InputLabel>
                    <Select
                        labelId="sort-by"
                        id="sort-by"
                        value={props.sortOrder}
                        onChange={(event) => props.setSortOrder(event.target.value)}
                        label="Sort Result By"
                    >
                        {
                            sortingValues.map(currentValue => {
                                return <MenuItem value={currentValue.value}>{currentValue.key}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </Paper>

            <Paper elevation={3} className={classes.paper}>
                <h6>Filter</h6>
                <Divider />
                <p></p>
                <FormControl style={{ width: "100%" }} variant="outlined" className={classes.formControl}>
                    <label>Release date</label>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={true}
                                onChange={() => { }}
                                name="SearchAll"
                                color="primary"
                            />
                        }
                        label="Search All Release Date ?"
                    />
                    <TextField
                        id="date"
                        label="From"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="To"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Divider />
                    <label>Genres</label>
                    <div>
                        {
                            genres.map(currentGenres => {
                                return (
                                    <Button key={currentGenres.id} style={{ maxWidth: "fit-content", whiteSpace: "nowrap", marginBottom: "5px" }} variant="outlined" color="primary">
                                        {currentGenres.name}
                                    </Button>)
                            })
                        }
                    </div>
                    <Divider />
                    <label>Genres</label>
                    <div>
                        {
                            certification.map(currentCert => {
                                return (
                                    <Button key={currentCert.id} style={{ maxWidth: "fit-content", whiteSpace: "nowrap", marginBottom: "5px" }} variant="outlined" color="primary">
                                        {currentCert.name}
                                    </Button>)
                            })
                        }
                    </div>
                    <Divider />
                    <p></p>
                    <FormControl style={{ width: "100%", marginBottom: "5px" }} variant="outlined" className={classes.formControl}>
                        <InputLabel id="language">Language</InputLabel>
                        <Select
                            labelId="language"
                            id="language"
                            onChange={(event) => { }}
                            label="Language"
                        >
                            {
                                languages.map(currentValue => {
                                    return <MenuItem value={currentValue.iso_639_1}>{currentValue.english_name}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <Divider />
                    <RangeSlider label="User score" />
                    <Divider />
                    <RangeSlider label="Minimum User Votes" />
                    <Divider />
                    <RangeSlider label="Run Time" />
                </FormControl>
            </Paper>
        </>
    )
}
export default SortAndSearch