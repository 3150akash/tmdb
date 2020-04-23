import * as actionTypes from "./actionTypes"
import axios from "../../utility/axios-tmdb"
const getCategoryDataStart = () => {
    return {
        type: actionTypes.GET_CATEGORY_DATA_START
    }
}
const getCategoryDataFailed = () => {
    return {
        type: actionTypes.GET_CATEGORY_DATA_FAIL
    }
}

const getCategoryDataSuccess = (data) => {
    return {
        type: actionTypes.GET_CATEGORY_DATA_SUCCESS,
        data: { ...data }
    }
}

const setCategoryInfo = (masterCategory, subCategory) => {
    return {
        type: actionTypes.SET_CATEGORY_INFO,
        categoryInfo: {
            masterCategory: masterCategory,
            subCategory: subCategory
        }
    }
}

export const setCategoryDataFilter = (filter) => {
    return {
        type: actionTypes.SET_CATEGORY_DATA_FILTER,
        filter: filter
    }
}

export const setCategoryDataSortOrder = (sortOrder) => {
    return {
        type: actionTypes.SET_CATEGORY_DATA_SORT_ORDER,
        sortOrder: sortOrder
    }
}

export const fetchCategoryData = (mastercategory, subCategory) => {
    return (dispatch) => {
        dispatch(setCategoryInfo(mastercategory, subCategory))
        const url = `${mastercategory}/${subCategory}?api_key=${process.env.REACT_APP_API_ID}&language=en-US&page=1`;
        dispatch(getCategoryDataStart())
        axios.get(url).then(respose => {
            dispatch(getCategoryDataSuccess(respose.data))
        }).catch(err => {
            dispatch(getCategoryDataFailed())
        })
    }
}