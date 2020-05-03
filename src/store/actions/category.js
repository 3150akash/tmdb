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
export const setPageNumber = (currentpage) => {
    return {
        type: actionTypes.SET_CATEGORY_DATA_PAGE_NUMBER,
        currentpage: currentpage
    }
}

// export const applySortAndSearch =()

export const fetchCategoryData = (mastercategory, subCategory, pageNumber, sortOrder) => {
    return (dispatch, getState) => {
        dispatch(setCategoryInfo(mastercategory, subCategory))
        const url = `discover/${mastercategory}?api_key=${process.env.REACT_APP_API_ID}&sort_by=${(sortOrder !== "" ? sortOrder : "popularity.desc")}&include_adult=false&include_video=false&page=${pageNumber || 1}`;
        dispatch(getCategoryDataStart())
        axios.get(url).then(response => {
            const state = getState()
            const oldData = (state.category.data.results && pageNumber !== 1) ? state.category.data.results : []
            response.data.results = [...oldData, ...response.data.results]
            dispatch(getCategoryDataSuccess(response.data))
        }).catch(err => {
            dispatch(getCategoryDataFailed())
        })
    }
}