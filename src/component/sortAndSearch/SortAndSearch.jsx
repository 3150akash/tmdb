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
import CollapsePanel from "../utilityComponent/collapsePanel/CollpasePanel";
import DropDown from "../utilityComponent/dropDown/DropDown";
import { updateobject } from "../../utility/utility";
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

const updateGenres = (props, currentGenres) => {
    let selectedGenres = [];
    if (props.filter.genres.indexOf(currentGenres) > -1) {
        selectedGenres = props.filter.genres.filter(current => {
            return currentGenres !== current;
        })
    } else {
        selectedGenres = [...props.filter.genres, currentGenres]
    }
    props.setFilter(updateobject(props.filter, { genres: selectedGenres }));
}

const updateCertification = (props, currentCertificate) => {
    let selectedCertificates = [];
    if (props.filter.certifiactes.indexOf(currentCertificate) > -1) {
        selectedCertificates = props.filter.certifiactes.filter(current => {
            return currentCertificate !== current;
        })
    } else {
        selectedCertificates = [...props.filter.certifiactes, currentCertificate]
    }
    props.setFilter(updateobject(props.filter, { certifiactes: selectedCertificates }));
}

const SortAndSearch = (props) => {
    const classes = useStyles();
    return (
        <>
            <CollapsePanel sectionTitle="Sort">
                <DropDown label="Sort by Result" id="sort-by" data={sortingValues} defaultvalue={props.sortOrder} onChange={(event) => props.setSortOrder(event.target.value)} />
            </CollapsePanel>
            <CollapsePanel sectionTitle="Filter">
                <FormControl style={{ width: "100%" }} variant="outlined" className={classes.formControl}>
                    <label>Release Date</label>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.filter.searchAll}
                                onChange={(event) => props.setFilter(event.target.checked ?
                                    updateobject(props.filter, { primary_release_date_lt: new Date().toISOString().slice(0, 10), primary_release_date_gt: new Date("01/01/1970").toISOString().slice(0, 10), searchAll: true })
                                    : updateobject(props.filter, { primary_release_date_lt: new Date().toISOString().slice(0, 10), primary_release_date_gt: new Date("01/01/1990").toISOString().slice(0, 10), searchAll: false })
                                )}
                                name="SearchAll"
                                color="primary"
                            />
                        }
                        label="Search All Release Date ?"
                    />
                    {
                        (!props.filter.searchAll) ? (
                            <>
                                <TextField
                                    id="gtDate"
                                    label="From"
                                    type="date"
                                    onChange={(event) => props.setFilter(updateobject(props.filter, { primary_release_date_gt: event.target.value }))}
                                    defaultValue={props.filter.primary_release_date_gt}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="ltDate"
                                    label="To"
                                    type="date"
                                    onChange={(event) => props.setFilter(updateobject(props.filter, { primary_release_date_lt: event.target.value }))}
                                    defaultValue={props.filter.primary_release_date_lt}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </>) : null
                    }
                    <Divider />
                    <label>Genres</label>
                    <div>
                        {
                            genres.map(currentGenres => {
                                return (
                                    <Button key={currentGenres.id}
                                        style={{ maxWidth: "fit-content", whiteSpace: "nowrap", marginBottom: "5px" }}
                                        onClick={() => updateGenres(props, currentGenres.id)}
                                        variant={props.filter.genres.indexOf(currentGenres.id) > -1 ? "contained" : "outlined"} color="primary">
                                        {currentGenres.name}
                                    </Button>)
                            })
                        }
                    </div>
                    <Divider />
                    <label>Certificate</label>
                    <div>
                        {
                            certification.map(currentCert => {
                                return (
                                    <Button key={currentCert.id}
                                        style={{ maxWidth: "fit-content", whiteSpace: "nowrap", marginBottom: "5px" }}
                                        onClick={() => updateCertification(props, currentCert.name)}
                                        variant={props.filter.certifiactes.indexOf(currentCert.name) > -1 ? "contained" : "outlined"} color="primary">
                                        {currentCert.name}
                                    </Button>)
                            })
                        }
                    </div>
                    <Divider />
                    <p></p>
                    <DropDown id="language" label="Language" data={languages} defaultValue={props.filter.language} onChange={(event) => props.setFilter(updateobject(props.filter, { language: event.target.value }))} />
                    <Divider />
                    <RangeSlider
                        handleChange={(event, newValue) => {
                            props.setFilter(updateobject(props.filter, { userScore: newValue }))
                        }}
                        defaultValue={props.filter.userScore}
                        step={1}
                        min={0}
                        max={10}
                        marks={[{ value: 0, label: 0 },
                        { value: 5, label: 5 },
                        { value: 10, label: 10 }]} label="User score" />
                    <Divider />
                    <RangeSlider
                        handleChange={(event, newValue) => {
                            props.setFilter(updateobject(props.filter, { minUserVotes: newValue }))
                        }}
                        defaultValue={props.filter.minUserVotes}
                        step={50}
                        min={0}
                        max={500}
                        marks={[{ value: 0, label: 0 },
                        { value: 100, label: 100 },
                        { value: 200, label: 200 },
                        { value: 300, label: 300 },
                        { value: 400, label: 400 },
                        { value: 500, label: 500 }]} label="Minimum User Votes" />
                    <Divider />
                    <RangeSlider
                        handleChange={(event, newValue) => {
                            props.setFilter(updateobject(props.filter, { runTime: newValue }))
                        }}
                        defaultValue={props.filter.runTime}
                        step={60}
                        min={0}
                        max={360}
                        marks={[{ value: 0, label: 0 },
                        { value: 120, label: 120 },
                        { value: 240, label: 240 },
                        { value: 360, label: 360 }]} label="Run Time" />
                    <Divider />
                    <p></p>
                    <Button color="primary" variant="outlined" onclick={props.search}>Search</Button>
                </FormControl>
            </CollapsePanel>
        </>
    )
}

export default SortAndSearch