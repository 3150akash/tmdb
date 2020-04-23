import React from "react"

const Heading = (props) => {
    return (
        <div className="panel panel-body"><h1>{`${props.masterCategory} ${props.subCategory}`}</h1></div>
    )
}
export default Heading