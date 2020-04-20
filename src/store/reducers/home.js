import * as actionTypes from "../actions/actionTypes"
import { updateobject } from "../../utility/utility"
const initialState = {
    popular: {
        movie: {
            loading: false,
        },
        person: {
            loading: false,
        },
        tv: {
            loading: false,
        },
        selectedCategory: "movie",
        title: "What's Popular",
        url: `{{infoType}}/popular?api_key=${process.env.REACT_APP_API_ID}&language=en-US&page=1`,
        categories: [{ displayVal: "Movies", val: "movie" }, { displayVal: "TV Shows", val: "tv" }, { displayVal: "People", val: "person" }]
    },
    now_playing: {
        movie: {
            loading: false,
        },
        title: "Now Playing",
        selectedCategory: "movie",
        loading: false,
        url: `{{infoType}}/now_playing?api_key=${process.env.REACT_APP_API_ID}&language=en-US&page=1`,
        categories: [{ displayVal: "Movies", val: "movie" }]
    },
    trending: {
        movie: {
            loading: false,
        },
        person: {
            loading: false,
        },
        tv: {
            loading: false,
        },
        all: {
            loading: false,
        },
        loading: false,
        title: "Trending",
        selectedCategory: "all",
        url: `trending/{{infoType}}/day?api_key=${process.env.REACT_APP_API_ID}`,
        categories: [{ displayVal: "All", val: "all" }, { displayVal: "Movies", val: "movie" }, { displayVal: "TV Shows", val: "tv" }, { displayVal: "People", val: "person" }]
    },
    // trailer: {
    //     movie: {},
    //     person: {},
    //     tv: {},
    //     selectedCategory: "movie",
    //     categories: [{ displayVal: "Movies", val: "movie" }, { displayVal: "TV Shows", val: "tv" }, { displayVal: "People", val: "person" }]
    // }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME_SUBCATEGORY_DATA_SUCCESS:
            return updateobject(state, masterSubCategoryData(action, state))
        // case actionTypes.GET_HOME_SUBCATEGORY_DATA_START:
        //     return updateobject(state, masterSubCategoryLoadingStart(action, state))
        case actionTypes.GET_HOME_SUBCATEGORY_DATA__FAIL:
            return updateobject(state, masterSubCategoryLoadingError(action, state))
        default:
            return state
    }
}

export default reducer;

const masterSubCategoryData = (action, state) => {
    let obj = {}
    obj[action.masterCategory] = updateobject(state[action.masterCategory], action.data)
    return obj
}
// export const masterSubCategoryLoadingStart = (action, state) => {
//     let obj = {}
//     obj[action.masterCategory] = updateobject(state[action.masterCategory], { loading: true, error: false })
// }
export const masterSubCategoryLoadingError = (action, state) => {
    let obj = {}
    obj[action.masterCategory] = updateobject(state[action.masterCategory], action.data)
}
