import React, { Fragment, useEffect } from "react";
import { Box, Grid, CardMedia } from "@material-ui/core";
import Moviecard from "../../component/utilityComponent/movieCard/MovieCard";
import { withRouter, useParams } from "react-router";
import * as actions from "../../store/actions"
import { connect } from "react-redux";
import Progress from "../../component/utilityComponent/progress/Progress";


function time_convert(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h ${minutes}m`;
}
const ObjectDetails = (props) => {
    // const objectId = props.match.params.id
    const objectType = props.objectType
    const { objectId } = useParams()
    useEffect(() => {
        props.fetchObjectDetail(objectType, objectId)
    }, [])
    const style = {
        backgroundImage: "url(" + `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.objectDetails.backdrop_path}` + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: "white"
    }
    const detailOutput = (
        <Box id="poster" style={style}>
            <Box style={{ backgroundImage: "linear-gradient(to right, rgba(20.39%, 16.08%, 19.22%, 1.00) 150px, rgba(25.88%, 24.71%, 25.49%, 0.84) 100%)" }}>
                <div class="row">
                    <div className="col-3">
                        {/* {`${objectID}----${objectType}`} */}
                        <Moviecard currentItem={props.objectDetails} type={objectType} size="12"></Moviecard>
                    </div>
                    <div className="col-9" style={{ marginTop: "75px" }}>
                        <div>
                            <span style={{ fontSize: "xx-large" }}><b>{`${props.objectDetails.original_title}`}</b> ({new Date(props.objectDetails.release_date).getFullYear()})</span>
                            <p>
                                <b>
                                    <span style={{ paddingRight: "4px", paddingLeft: "4px" }}>{props.objectDetails.release_date && props.objectDetails.release_date.split('-').join('/')}</span>.
                                <span style={{ paddingRight: "4px", paddingLeft: "4px" }}>{props.objectDetails.genres && props.objectDetails.genres.map((current, index) => {
                                        return `${current.name}${index + 1 < props.objectDetails.genres.length ? "," : ""}`
                                    })}</span>.
                                <span style={{ paddingRight: "4px", paddingLeft: "4px" }}>{props.objectDetails.runtime && time_convert(props.objectDetails.runtime)}</span>
                                </b>
                            </p>
                        </div>
                        <div>
                            <span>User Action Section</span>
                        </div>
                        <div id="overview">
                            <p>{props.objectDetails.overview}</p>
                        </div>
                    </div>
                </div>
            </Box>
        </Box >
    )
    return (
        <Fragment>
            {props.requestStart || props.requestFailed ? <Progress /> : detailOutput}
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        objectDetails: state.details.data,
        requestFailed: state.details.requestFailed,
        requestStart: state.details.requestStart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchObjectDetail: (objectType, objectId) => { dispatch(actions.fetchObjectDetail(objectType, objectId)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ObjectDetails));