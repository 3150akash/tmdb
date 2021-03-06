import * as actionTypes from "./actionTypes"
import axios from "../../utility/axios-tmdb"

const fetchingDetailStart = () => {
    return {
        type: actionTypes.GET_OBJECT_DETAIL_START
    }
}
const fetchingDetailFailed = () => {
    return {
        type: actionTypes.GET_OBJECT_DETAIL_FAIL
    }
}

const fetchingDetailSuccess = (data) => {
    return {
        type: actionTypes.GET_OBJECT_DETAIL_SUCCESS,
        payload: data
    }
}

const fetchingCreditSuccess = (data) => {
    return {
        type: actionTypes.GET_OBJECT_CREDIT,
        payload: data
    }
}

export const fetchObjectDetail = (objectType, objectId) => {
    return (dispatch) => {
        dispatch(fetchingDetailStart());
        axios.get(`${objectType}/${objectId}?api_key=${process.env.REACT_APP_API_ID}`).then(response => {
            dispatch(fetchingDetailSuccess(response.data))
        }).catch(err => {
            dispatch(fetchingDetailFailed())
        })
    }
}

export const fetchCredit = (objectType, objectId) => {
    return (dispatch) => {
        axios.get(`${objectType}/${objectId}/credits?api_key=${process.env.REACT_APP_API_ID}`).then(response => {
            dispatch(fetchingCreditSuccess(response.data))
        }).catch(err => {

        })
    }
}