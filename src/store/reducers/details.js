import * as actionType from "../actions/actionTypes"
import { updateobject } from "../../utility/utility"
const initialState = {
    data: {},
    requestFailed: false,
    requestStart: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_OBJECT_DETAIL_SUCCESS:
            return updateobject(state, { data: action.payload, requestFailed: false, requestStart: false })
        case actionType.GET_OBJECT_DETAIL_FAIL:
            return updateobject(state, { requestFailed: true, requestStart: false })
        case actionType.GET_OBJECT_DETAIL_START:
            return updateobject(state, { requestFailed: false, requestStart: true })
        default:
            return state
    }
}

export default reducer