import React from "react"
import {
    FormControl,
    InputLabel, MenuItem, Select
} from "@material-ui/core";


const DropDown = (props) => {
    return (
        <FormControl style={{ width: "100%", marginBottom: "5px" }} variant="outlined">
            <InputLabel id={`label-${props.id}`}>{props.label}</InputLabel>
            <Select
                labelId={`label-${props.id}`}
                id={props.id}
                onChange={props.onChange}
                label={props.label}
                defaultValue={props.defaultValue}
            >
                {
                    props.data.map(currentValue => {
                        return <MenuItem value={currentValue.value}>{currentValue.key}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    )
}

export default DropDown;