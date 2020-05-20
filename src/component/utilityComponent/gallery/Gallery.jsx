import React from "react"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./gallery.module.css"
import Moviecard from "../movieCard/MovieCard";

class Gallery extends React.PureComponent {
    render() {
        return (
            <div className="mt-2 container-fluid" >
                <div className={"row " + styles.gallery}>
                    {
                        (this.props.galleryData) ? this.props.galleryData.map(currentItem => {
                            return (
                                <Moviecard type={this.props.type} size="2" currentItem={currentItem} />
                            )
                        }) : <CircularProgress style={{ position: "absolute", left: "45%" }} color="primary" />
                    }
                </div>
            </div>
        )
    }
}
export default Gallery