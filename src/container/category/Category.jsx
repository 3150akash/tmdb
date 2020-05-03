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

    useEffect(() => {
        props.getData(masterCategory, subCategory, props.pageNumber, props.sortOrder)
    }, [props.sortOrder, props.filter, props.pageNumber])

    const onCategoryScroll = (ev) => {
        _handleScroll(ev, () => {
            props.setPageNumber(props.pageNumber + 1)
        })
    }
    window.onscroll = onCategoryScroll;
    useEffect(() => {
        return () => disableWindowsScroll(onCategoryScroll)
    }, [])

    const applySorting = (sortOrder) => {
        props.setPageNumber(1);
        props.setSortOrder(sortOrder)
    }

    return (
        <Fragment>
            <div className="col-12" style={{ paddingLeft: "0", paddingRight: "0", position: "sticky", top: "64px", zIndex:"100" }}>
                <Grid container>
                    <Heading masterCategory={masterCategory} subCategory={subCategory} ></Heading>
                </Grid>
            </div>
            <div style={{ marginTop: "12px" }}>
                <Grid justify={'space-between'} container lg={12}>
                    <div className="col-3" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <Grid style={{ paddingRight: "5px", top: "132px" }}>
                            <SortAndSearch sortOrder={props.sortOrder} filter={props.filter} setSortOrder={applySorting} />
                        </Grid>
                    </div>
                    <div className="col-9" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <Grid justify={'space-between'} container>
                            <CategoryPanel data={props.categoryData} />
                        </Grid>
                    </div>
                </Grid>
            </div>
        </Fragment >
    )
}

const mapStateToProps = (state) => {
    return {
        categoryData: state.category.data.results,
        sortOrder: state.category.sortOrder,
        filter: state.category.filter,
        pageNumber: state.category.currentpage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (mastercategory, subCategory, pageNumber, sortOrder) => dispatch(actions.fetchCategoryData(mastercategory, subCategory, pageNumber, sortOrder)),
        setSortOrder: (sortOrder) => dispatch(actions.setCategoryDataSortOrder(sortOrder)),
        setPageNumber: (pageNumber) => dispatch(actions.setPageNumber(pageNumber))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category);