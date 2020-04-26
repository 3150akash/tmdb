import React, { Fragment, useEffect, useState } from "react"
import Heading from "../../component/utilityComponent/heading/Heading"
import { connect } from "react-redux"
import * as actions from "../../store/actions"
import CategoryPanel from "../../component/categoryPanel/CategoryPanel"
import SortAndSearch from "../../component/sortAndSearch/SortAndSearch"
import { _handleScroll, disableWindowsScroll } from "../../utility/utility"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        marginTop: 12
    }
});

const Category = (props) => {
    const classes = useStyles();
    const masterCategory = props.match.params.masterCategory || "Movies"
    const subCategory = props.match.params.subcategory || "popular"

    const [pageNumber, setPageNumber] = useState(1)
    useEffect(() => {
        props.getData(masterCategory, subCategory, pageNumber)
    }, [props.sortOrder, props.filter, pageNumber])

    const onCategoryScroll = (ev) => {
        console.log(pageNumber)
        _handleScroll(ev, () => {
            setPageNumber(updatePage)
        })
    }
    const updatePage = (pageNumber) => {
        return pageNumber + 1
    }
    window.onscroll = onCategoryScroll;
    useEffect(() => {
        return () => disableWindowsScroll(onCategoryScroll)
    }, [])

    return (
        <Fragment>
            <Heading masterCategory={masterCategory} subCategory={subCategory} ></Heading>
            <div style={{marginTop:"12px"}}>
                <Grid container lg={12}>
                    <SortAndSearch />
                    <CategoryPanel data={props.categoryData} />
                </Grid>
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