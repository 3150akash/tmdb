import React from "react"
import Home from "../home/home"
import ErrorBounderies from "../../component/errorBounderies/ErrorBounderies"
import { Switch, Route } from "react-router"
import Category from "../category/Category"

const MainContaint = (props) => {
    return (
        <div className="container">
            <ErrorBounderies>
                <Switch>
                    <Route path="/categories/:masterCategory/:subcategory" component={Category} />
                    <Route path="/categories/:masterCategory" component={Category} />
                    <Route path="/categories" component={Category} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </ErrorBounderies>
        </div>
    )
}
export default MainContaint