import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    return (
        <li>
            <Link to={'/chi-tiet/' + props.item_info.id}>
                <div className="game-grid">
                    <h4>{props.item_info.type}</h4>
                    <p>{props.item_info.title}</p>
                    <img src={props.item_info.image} className="img-responsive" alt="" />
                </div>
            </Link>
        </li>
    );
};

export default ProductItem;