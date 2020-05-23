import React from "react"
import Moviecard from "../movieCard/MovieCard";
import { Box, Grid, CardMedia } from "@material-ui/core";
import { time_convert_To_Hour_And_Minute } from "../../../utility/utility"


const DetailView = (props) => {
    const style = {
        backgroundImage: "url(" + `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.objectDetails.backdrop_path}` + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: "white"
    }
    return (
        <Box id="poster" style={style}>
            <Box style={{ backgroundImage: "linear-gradient(to right, rgba(20.39%, 16.08%, 19.22%, 1.00) 150px, rgba(25.88%, 24.71%, 25.49%, 0.84) 100%)" }}>
                <div class="row">
                    <div style={{ marginTop: "10px", marginLeft: "5px" }} className="col-3">
                        {/* {`${objectID}----${objectType}`} */}
                        <Moviecard currentItem={props.objectDetails} type={props.type} size="12"></Moviecard>
                    </div>
                    <div className="col-8" style={{ marginTop: "65px", marginBottom: "100px" }}>
                        <div>
                            <span style={{ fontSize: "xx-large" }}><b>{`${props.objectDetails.original_title}`}</b> ({new Date(props.objectDetails.release_date).getFullYear()})</span>
                            <p>
                                <b>
                                    <span style={{ paddingRight: "4px", paddingLeft: "4px" }}>{props.objectDetails.release_date && props.objectDetails.release_date.split('-').join('/')}</span>.
                            <span style={{ paddingRight: "4px", paddingLeft: "4px" }}>{props.objectDetails.genres && props.objectDetails.genres.map((current, index) => {
                                        return `${current.name}${index + 1 < props.objectDetails.genres.length ? "," : ""}`
                                    })}</span>.
                            <span style={{ paddingRight: "4px", paddingLeft: "4px" }}>{props.objectDetails.runtime && time_convert_To_Hour_And_Minute(props.objectDetails.runtime)}</span>
                                </b>
                            </p>
                        </div>
                        <div>
                            <span>User Action Section</span>
                        </div>
                        <div>
                            <p><i>{props.objectDetails.tagline}</i></p>
                        </div>
                        <div id="overview">
                            <h6 style={{ fontSize: "x-large" }}>Overview</h6>
                            <p>{props.objectDetails.overview}</p>
                        </div>
                    </div>
                </div>
            </Box>
        </Box >
    )
}

export default React.memo(DetailView)