import React from "react"
import {
    Card, Spinner
} from 'reactstrap';
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
                                <Moviecard currentItem={currentItem} />
                            )
                        })
                            : (
                                <Card className="col-2 p-0 mr-5 border border-0" style={{ left: "50%", paddingTop: "100px !important" }}>
                                    <Spinner style={{ width: '5rem', height: '5rem' }} color="primary" />
                                </Card>
                            )
                    }
                </div>
            </div>
        )
    }
}
export default Gallery