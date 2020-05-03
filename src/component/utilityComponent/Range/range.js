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
    // const [value, setValue] = React.useState([20, 37]);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    return (
        <div>
            <Typography id="range-slider" gutterBottom>
                {props.label}
            </Typography>
            <Slider
                onChange={props.handleChange}
                valueLabelDisplay="auto"
                defaultValue={[0,0]}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                step={1}
                min={0}
                max={10}
                marks={[{value:0, label:0},{value:5, label:5},{value:10, label:10}]}
            />
        </div>
    );
}
