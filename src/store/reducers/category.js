import * as actiontype from "../actions/actionTypes"
import { updateobject } from "../../utility/utility"
const initialState = {
    loading: false,
    error: false,
    masterCategory: "",
    subCategory: "",
    data: {},
    filter: {
        genres: [],
        certifiactes: [],
        searchAll: true,
        primary_release_date_lt: new Date().toISOString().slice(0, 10),
        primary_release_date_gt: new Date().toISOString().slice(0, 10),
        language: "",
        userScore: [0, 10],
        minUserVotes: [0],
        runTime: [0, 360]
    },
    sortOrder: "",
    currentpage: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontype.SET_CATEGORY_DATA_FILTER:
            {
                return updateobject(state, action.payload)
            }
        case actiontype.SET_CATEGORY_DATA_SORT_ORDER:
            {
                return updateobject(state, { sortOrder: action.sortOrder })
            }
        case actiontype.SET_CATEGORY_DATA_PAGE_NUMBER:
            {
                return updateobject(state, { currentpage: action.currentpage })
            }
        case actiontype.GET_CATEGORY_DATA_FAIL:
            {
                return updateobject(state, { loading: false, error: true })
            }
        case actiontype.GET_CATEGORY_DATA_SUCCESS:
            {
                return updateobject(state, { data: action.data, loading: false, error: false })
            }
        case actiontype.GET_CATEGORY_DATA_START:
            {
                return updateobject(state, { loading: true, error: false })
            }
        case actiontype.SET_CATEGORY_INFO:
            {
                return updateobject(state, action.categoryInfo)
            }
        default: {
            return state;
        }
    }
}

export default reducer;