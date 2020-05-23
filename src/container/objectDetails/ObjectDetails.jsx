import React, { Fragment, useEffect } from "react";
import { Box, Grid, CardMedia } from "@material-ui/core";
import { withRouter, useParams } from "react-router";
import * as actions from "../../store/actions"
import { connect } from "react-redux";
import Progress from "../../component/utilityComponent/progress/Progress";
import Gallery from "../../component/utilityComponent/gallery/Gallery";
import DetailView from "../../component/utilityComponent/detailView/DetailView";


const ObjectDetails = (props) => {
    // const objectId = props.match.params.id
    const objectType = props.objectType
    const { objectId } = useParams()
    useEffect(() => {
        props.fetchObjectDetail(objectType, objectId)
        props.fetchCredit(objectType, objectId)
    }, [])
    return (
        <Fragment>
            {props.requestStart || props.requestFailed ? <Progress /> : <DetailView type={objectType} objectDetails={props.objectDetails} />}
            <Box style={{ marginBottom: "100px" }}>
                <Gallery galleryData={props.objectCredit && props.objectCredit.cast} type={"person"} />
            </Box>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        objectDetails: state.details.data,
        requestFailed: state.details.requestFailed,
        requestStart: state.details.requestStart,
        objectCredit: state.details.objectCredit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchObjectDetail: (objectType, objectId) => { dispatch(actions.fetchObjectDetail(objectType, objectId)) },
        fetchCredit: (objectType, objectId) => { dispatch(actions.fetchCredit(objectType, objectId)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ObjectDetails));