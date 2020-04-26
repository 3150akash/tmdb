import React, { Fragment } from "react"
import styles from "./home.module.css"
import Tabs from "../../component/utilityComponent/tabs/Tabs";
import Gallery from "../../component/utilityComponent/gallery/Gallery"
import Box from '@material-ui/core/Box';
import { connect } from "react-redux";

class Home extends React.PureComponent {
    render() {
        return (
            <Fragment>
                <Box lg={12} id="brandPanel">
                    <div className={styles.brandPanel + " row"}>
                        <article className="col">
                            <h1>welcome.</h1>
                            <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                        </article>
                    </div>
                </Box>
                {
                    Object.keys(this.props.AllGallery).map(currentGalleryKey => {
                        const currentGallerObject = this.props.AllGallery[currentGalleryKey]
                        if (currentGallerObject) {
                            return (
                                <Box key={currentGalleryKey} id={currentGalleryKey}>
                                    <Tabs title={currentGallerObject.title} masterCategory={currentGalleryKey} selectedCategory={currentGallerObject.selectedCategory} tabItems={currentGallerObject.categories}></Tabs>
                                    <Gallery galleryData={currentGallerObject[currentGallerObject.selectedCategory].results}></Gallery>
                                </Box>
                            )
                        }
                        else {
                            return null
                        }
                    })
                }
                <section id="extraContaint">

                </section>
            </Fragment >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        AllGallery: {
            popular: state.home.popular,
            now_playing: state.home.now_playing,
            trending: state.home.trending,
            // trailer: state.home.trailer
        }
    }
}
export default connect(mapStateToProps)(Home)