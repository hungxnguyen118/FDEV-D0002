import React from 'react';

const ProductItem = (props) => {
    return (
        <li>
            <div className="game-grid">
                <h4>{props.item_info.type}</h4>
                <p>{props.item_info.title}</p>
                <img src={props.item_info.image} className="img-responsive" alt="" />
            </div>
        </li>
    );
};

export default ProductItem;