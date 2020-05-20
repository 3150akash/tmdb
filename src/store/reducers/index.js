import { combineReducers } from "redux"
import home from "./home"
import category from "./category"
import details from "./details"

export const rootReducer = combineReducers({
    home: home,
    category: category,
    details: details
})