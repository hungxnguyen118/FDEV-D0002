import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';

const PosterDetail = () => {

    let { id_san_pham } = useParams();

    useEffect(() => {
        //console.log(id_san_pham);
    }, [])

    return (
        <div className="poster">
            <div className="container">
            <div className="poster-info">
                <h3>Sản phẩm {id_san_pham}</h3>
                <p>Proin ornare metus eros, quis mattis lorem venenatis eget. Curabitur eget dui euismod,
                varius nisl eu, pharetra lacus. Sed vehicula tempor leo. Aenean dictum suscipit magna vel
                tempus. Aliquam nec dui dolor. Quisque scelerisque aliquet est et dignissim. Morbi magna quam,
                molestie sed fermentum et, elementum at dolor</p>
                <a className="hvr-bounce-to-bottom" href="reviews.html">Read More</a>
            </div>
            </div>
        </div>
    );
};

export default PosterDetail;