import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';

const ProductList = (props) => {

    const [ds_movie, SetDSMovie] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/movies')
        .then((result) => {
            console.log(result);

            if(typeof result.data != 'undefined' && result.data.data_send != null){
                SetDSMovie(result.data.data_send)
            }

        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <ul id="flexiselDemo1">
            {
                // props.list_item.map(item_info => 
                //     <ProductItem  item_info={item_info} />
                // )
                ds_movie.map(item_info => 
                    <ProductItem  item_info={item_info} />
                )
            }
        </ul>
    );
};

export default ProductList;