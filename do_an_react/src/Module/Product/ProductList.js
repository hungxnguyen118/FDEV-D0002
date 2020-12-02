import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
    return (
        <ul id="flexiselDemo1">
            {
                props.list_item.map(item_info => 
                    <ProductItem  item_info={item_info} />
                )
            }
        </ul>
    );
};

export default ProductList;