import React, { useRef } from "react"
import Tabs from "../tabs/Tabs";
import Gallery from "../gallery/Gallery"

const GalleryCollection = ({ currentGalleryKey, currentGallerObject }) => {
    const parent = useRef(null);
    return (
        <div ref={parent} key={currentGalleryKey} id={currentGalleryKey}>
            <Tabs title={currentGallerObject.title} masterCategory={currentGalleryKey} selectedCategory={currentGallerObject.selectedCategory} tabItems={currentGallerObject.categories}></Tabs>
            <Gallery parent={parent} type={currentGallerObject.selectedCategory} galleryData={currentGallerObject[currentGallerObject.selectedCategory].results}></Gallery>
        </div>
    )
}

export default React.memo(GalleryCollection);