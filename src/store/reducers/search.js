import * as actions from "../actions/actionTypes"
import { updateobject } from "../../utility/utility"

const initialState = {
    searchOutput: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_SEARCH_SUCCESS:
            return updateobject(state, { searchOutput: action.payload })
        default:
            return state
    }
}


export default reducer