import React from "react";
import './gallery.scss';

let Gallery = ({gallery}) => {
    let images = gallery.map((item) => <img src={item} alt="hotel view" className="gallery--img"/>)
    return(
        <div className="gallery">
            {images}
        </div>
    )
}

export default Gallery;