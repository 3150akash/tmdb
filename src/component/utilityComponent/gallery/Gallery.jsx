import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { connect } from "react-redux";
import styles from "./gallery.module.css"

class Gallery extends React.PureComponent {

    render() {
        return (
            <div className="mt-2 container-fluid" >
                <div className={"row " + styles.gallery}>
                    {
                        this.props.galleryData && this.props.galleryData.map(currentItem => {
                            return (
                                <Card key={currentItem.id} className="col-2 p-0 mr-5 border border-0">
                                    <CardImg className="border" top width="100%" src={`https://image.tmdb.org/t/p/w220_and_h330_face${currentItem.poster_path ? currentItem.poster_path : currentItem.profile_path}`} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle><h4>{currentItem.title ? currentItem.title : currentItem.name}</h4></CardTitle>
                                        {
                                            currentItem.title
                                                ? <CardSubtitle><h5> Release On {currentItem.release_date ? currentItem.release_date : currentItem.first_air_date}</h5></CardSubtitle>
                                                : null
                                        }
                                    </CardBody>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         galleryData: state.home[state.home.selectedCategory].results
//     }
// }
export default Gallery