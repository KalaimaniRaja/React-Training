import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log(props.images)

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    return (
    <div>
        {images}
    </div>
    )
}

export default ImageList;