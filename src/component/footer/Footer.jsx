import React from "react"
import { colors } from "@material-ui/core";

const Footer = (props) => {
    return (
        <div style={{ backgroundColor: "#3f51b5", color: "white", padding:"20px" }} className="row">
            Some Footer Data
        </div>
    )
}
export default React.memo(Footer);