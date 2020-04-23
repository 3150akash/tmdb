import React from "react"
import { Spinner } from "reactstrap"
import MovieCard from "../utilityComponent/movieCard/MovieCard"
const CategoryPanel = ({ data }) => {
    return (
        <div className="row Panel panel-body mb-5 p-0 col-md-9" style={{ minHeight: "70vh" }}>
            {
                (data && data.length > 0)
                    ? data.map(currentItem => {
                        return <MovieCard size="large" currentItem={currentItem} />
                    })
                    : <Spinner style={{
                        width: "5rem",
                        height: "5rem",
                        position: "absolute",
                        left: "45%",
                        top: "40%",
                    }} color="primary" />
            }
        </div>
    )
}

export default CategoryPanel