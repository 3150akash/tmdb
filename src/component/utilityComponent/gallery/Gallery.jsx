import React from "react"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./gallery.module.css"
import Moviecard from "../movieCard/MovieCard";

const Gallery = React.forwardRef((props, ref) => {
    return (
        <div className="mt-2 container-fluid" >
            <div className={"row " + styles.gallery}>
                {
                    (props.galleryData) ? props.galleryData.map(currentItem => {
                        return (
                            <Moviecard parent={props.parent} type={props.type} size="2" currentItem={currentItem} />
                        )
                    }) : <CircularProgress style={{ position: "absolute", left: "45%" }} color="primary" />
                }
            </div>
        </div>
    )
})
export default Gallery