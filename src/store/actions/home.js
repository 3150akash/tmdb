import axios from "../../utility/axios-tmdb"
import * as actionType from "./actionTypes"
import { stringTemplateParser } from "../../utility/utility"

export const getDataSuccess = (data, masterCategory, category) => {
    return {
        type: actionType.GET_HOME_SUBCATEGORY_DATA_SUCCESS,
        data: { ...data, selectedCategory: category },
        masterCategory: masterCategory
    }
}

// export const getDataStart = (masterCategory) => {
//     return {
//         type: actionType.GET_HOME_SUBCATEGORY_DATA_SUCCESS,
//         masterCategory: masterCategory
//     }
// }

export const getDataFail = (data, masterCategory, category) => {
    return {
        type: actionType.GET_HOME_SUBCATEGORY_DATA__FAIL,
        data: { ...data, selectedCategory: category },
        masterCategory: masterCategory
    }
}

export const fetchData = (masterCategory, infoType) => {
    return (dispatch, getState) => {
        const state = getState()
        if (state.home[masterCategory][infoType].results) {
            dispatch(getDataSuccess({}, masterCategory, infoType))
        } else {
            let url = stringTemplateParser(state.home[masterCategory].url, { infoType: infoType})
            axios.get(url).then(result => {
                let dummyObject = {}
                dummyObject[infoType] = result.data
                dispatch(getDataSuccess(dummyObject, masterCategory, infoType))
            }).catch(err => {
                let dummyObject = {}
                dummyObject[infoType] = { error: err }
                dispatch(getDataFail(dummyObject, masterCategory, infoType))
            })
        }
    }
}