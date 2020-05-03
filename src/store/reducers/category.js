import * as actiontype from "../actions/actionTypes"
import { updateobject } from "../../utility/utility"
const initialState = {
    loading: false,
    error: false,
    masterCategory: "",
    subCategory: "",
    data: {},
    filter: {},
    sortOrder: "",
    currentpage: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontype.SET_CATEGORY_DATA_FILTER:
            {
                return updateobject(state, action.filter)

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