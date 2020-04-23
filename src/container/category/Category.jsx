import React, { Fragment, useEffect } from "react"
import Heading from "../../component/utilityComponent/heading/Heading"
import { connect } from "react-redux"
import * as actions from "../../store/actions"
import CategoryPanel from "../../component/categoryPanel/CategoryPanel"
import SortAndSearch from "../../component/sortAndSearch/SortAndSearch"
const Category = (props) => {
    const masterCategory = props.match.params.masterCategory || "Movies"
    const subCategory = props.match.params.subcategory || "popular"

    useEffect(() => {
        props.getData(masterCategory, subCategory)
    }, [props.sortOrder, props.filter])

    return (
        <Fragment>
            <Heading masterCategory={masterCategory} subCategory={subCategory} ></Heading>
            <div className="Panel">
                <SortAndSearch />
                <CategoryPanel data={props.categoryData} />
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        categoryData: state.category.data.results,
        sortOrder: state.category.sortOrder,
        filter: state.category.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (mastercategory, subCategory) => dispatch(actions.fetchCategoryData(mastercategory, subCategory))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category);