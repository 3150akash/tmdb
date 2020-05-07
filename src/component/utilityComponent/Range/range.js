import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return value;
}

export default function RangeSlider(props) {
    const classes = useStyles();

    return (
        <div>
            <Typography id="range-slider" gutterBottom>
                {props.label}
            </Typography>
            <Slider
                onChange={props.handleChange}
                valueLabelDisplay="auto"
                defaultValue={props.defaultValue}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                step={props.step}
                min={props.min}
                max={props.max}
                marks={props.marks}
            />
        </div>
    );
}
