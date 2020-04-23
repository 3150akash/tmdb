import { combineReducers } from "redux"
import home from "./home"
import category from "./category"

export const rootReducer = combineReducers({
    home: home,
    category: category
})