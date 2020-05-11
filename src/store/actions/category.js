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
        payload: { filter: filter }
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
        const state = getState()
        const url = `discover/${mastercategory}?` + `api_key=${process.env.REACT_APP_API_ID}` +
            `&sort_by=${(sortOrder !== "" ? sortOrder : "popularity.desc")}` +
            `&include_adult=false` + `${state.category.filter.searchAll ? `` : `&primary_release_date.gte=${state.category.filter.primary_release_date_gt}&primary_release_date.lte=${state.category.filter.primary_release_date_lt}`}` +
            `${state.category.filter.genres.length > 0 ? `&with_genres=${state.category.filter.genres.join('%2C')}` : ``}` +
            `${state.category.filter.certifiactes.length > 0 ? `&certification=${state.category.filter.certifiactes.join('%2C')}` : ``}` +
            `${state.category.filter.language ? `&with_original_language=${state.category.filter.language}` : ``}` +
            `&vote_average.gte=${state.category.filter.userScore[0]}` +
            `&vote_average.lte=${state.category.filter.userScore[1]}` +
            `&vote_count.gte=${state.category.filter.userScore[0]}` +
            `&with_runtime.gte=${state.category.filter.runTime[0]}` +
            `&with_runtime.lte=${state.category.filter.runTime[1]}` +
            `&include_video=false&page=${pageNumber || 1} `;
        // url = url.replace(/%20/g, "");
        dispatch(getCategoryDataStart())
        axios.get(url.replace(/%20/g, "")).then(response => {
            const oldData = (state.category.data.results && pageNumber !== 1) ? state.category.data.results : []
            response.data.results = [...oldData, ...response.data.results]
            dispatch(getCategoryDataSuccess(response.data))
        }).catch(err => {
            dispatch(getCategoryDataFailed())
        })
    }
}