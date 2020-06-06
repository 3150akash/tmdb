import * as actions from "./actionTypes"
import axios from "../../utility/axios-tmdb"

const getSearchSuccess = (data, onSearchPage) => {
    return {
        type: actions.GET_SEARCH_SUCCESS,
        payload: data,
        onSearchPage: onSearchPage
    }
}

export const fetchSearchoutput = (searchString, onSearchPage) => {
    return (dispatch) => {
        if (onSearchPage && (searchString === undefined || searchString === null || searchString === "")) {
            dispatch(getSearchSuccess(""))
        } else {
            axios.get(`search/multi?api_key=${process.env.REACT_APP_API_ID}&language=en-US&query=${searchString}&page=1&include_adult=false`)
                .then(response => {
                    dispatch(getSearchSuccess(response.data, onSearchPage))
                }).catch(err => {

                })
        }
    }
}
