import React from "react"
// import { Spinner } from "reactstrap"
import Grid from '@material-ui/core/Grid';
import MovieCard from "../utilityComponent/movieCard/MovieCard"
const CategoryPanel = ({ data }) => {
    return (
        <Grid justify={'space-between'} container md={9}>
            {
                (data && data.length > 0)
                    ? data.map(currentItem => {
                        return <MovieCard key={currentItem.id} size="large" currentItem={currentItem} />
                    })
                    : <div style={{
                        width: "5rem",
                        height: "5rem",
                        position: "absolute",
                        left: "45%",
                        top: "40%",
                    }} color="primary" />
            }
        </Grid>
    )
}

export default CategoryPanel