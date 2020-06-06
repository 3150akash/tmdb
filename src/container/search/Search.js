import React, { useEffect, useState } from "react"
import { Box, Paper, Grid, CardMedia, CardContent, Typography, CardActionArea } from "@material-ui/core"
import { getUrlParameter } from "../../utility/utility"
import { connect } from "react-redux"
import * as actions from "../../store/actions"
import MovieCard from "../../component/utilityComponent/movieCard/MovieCard"


const SearchContainer = (props) => {
    const queryString = getUrlParameter("query")
    // const [displayUpdate, setUpdate] = useState(false)
    useEffect(() => {
        props.executeSearch(queryString, true)
        // setUpdate(true)
    }, [queryString])
    return (
        <Grid justify={'space-between'} container style={{ marginTop: "12px", display: "flex", flexWrap: "wrap" }}>
            {
                props.onSearchPage && props.searchOutput.results && props.searchOutput.results.map(currentItem => {
                    return <MovieCard key={currentItem.id} size="2" type={currentItem.media_type} currentItem={currentItem} />
                })}
        </Grid >
    )
}

const mapStateToProps = (state) => {
    return {
        searchOutput: state.search.searchOutput,
        onSearchPage: state.search.onSearchPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        executeSearch: (query, onSearchPage) => { dispatch(actions.fetchSearchoutput(query, onSearchPage)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)