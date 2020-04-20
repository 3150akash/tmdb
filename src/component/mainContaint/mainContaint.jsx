import React from "react"
import Home from "../home/home"
import ErrorBounderies from "../errorBounderies/ErrorBounderies"
// import Provider from "react-redux"
import { store } from "../../store"
import { Provider } from "react-redux"
const MainContaint = (props) => {
    return (
        <Provider store={store}>
            <div className="container">
                <ErrorBounderies>
                    <Home></Home>
                </ErrorBounderies>
            </div>
        </Provider>
    )
}
export default MainContaint