import * as actions from "./actionTypes"
import axios from "../../utility/axios-tmdb"

const getSearchSuccess = (data) => {
    return {
        type: actions.GET_SEARCH_SUCCESS,
        payload: data
    }
}

export const fetchSearchoutput = (searchString) => {
    return (dispatch) => {
        axios.get(`search/multi?api_key=${process.env.REACT_APP_API_ID}&language=en-US&query=${searchString}&page=1&include_adult=false`)
            .then(response => {
                dispatch(getSearchSuccess(response.data))
            }).catch(err => {

            })
    }
}
