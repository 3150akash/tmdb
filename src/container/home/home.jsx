import React, { Fragment, useRef } from "react"
import styles from "./home.module.css"
import Box from '@material-ui/core/Box';
import { connect } from "react-redux";
import GalleryCollection from "../../component/utilityComponent/galleryCollection/GalleryCollection";

const Home = (props) => {
    // const parent = useRef(null)
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
                Object.keys(props.AllGallery).map(currentGalleryKey => {
                    const currentGallerObject = props.AllGallery[currentGalleryKey]
                    if (currentGallerObject) {
                        return (
                            <GalleryCollection currentGallerObject={currentGallerObject} currentGalleryKey={currentGalleryKey} />
                            // <div ref={parent} key={currentGalleryKey} id={currentGalleryKey}>
                            //     <Tabs title={currentGallerObject.title} masterCategory={currentGalleryKey} selectedCategory={currentGallerObject.selectedCategory} tabItems={currentGallerObject.categories}></Tabs>
                            //     <Gallery parent={parent} type={currentGallerObject.selectedCategory} galleryData={currentGallerObject[currentGallerObject.selectedCategory].results}></Gallery>
                            // </div>
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