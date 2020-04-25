import React, { Fragment, useEffect, useState } from "react"
import Heading from "../../component/utilityComponent/heading/Heading"
import { connect } from "react-redux"
import * as actions from "../../store/actions"
import CategoryPanel from "../../component/categoryPanel/CategoryPanel"
import SortAndSearch from "../../component/sortAndSearch/SortAndSearch"
import { _handleScroll, disableWindowsScroll } from "../../utility/utility"
const Category = (props) => {
    const masterCategory = props.match.params.masterCategory || "Movies"
    const subCategory = props.match.params.subcategory || "popular"

    const [pageNumber, setPageNumber] = useState(1)
    useEffect(() => {
        props.getData(masterCategory, subCategory, pageNumber)
        return () => disableWindowsScroll(onCategoryScroll)
    }, [props.sortOrder, props.filter, pageNumber])

    const onCategoryScroll = (ev) => {
        _handleScroll(ev, () => {
            setPageNumber(pageNumber + 1)
        })
    }
    window.onscroll = onCategoryScroll;
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
        getData: (mastercategory, subCategory, pageNumber) => dispatch(actions.fetchCategoryData(mastercategory, subCategory, pageNumber))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category);