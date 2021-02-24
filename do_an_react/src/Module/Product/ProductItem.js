import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    return (
        <li>
            <Link to={'/chi-tiet/' + props.item_info.ma}>
                {/* <div className="game-grid">
                    <h4>{props.item_info.type}</h4>
                    <p>{props.item_info.title}</p>
                    <img src={props.item_info.image} className="img-responsive" alt="" />
                </div> */}
                <div className="game-grid">
                    {/* <h4>{props.item_info.type}</h4> */}
                    <p>{props.item_info.ten_san_pham}</p>
                    <img src={'/images/san_pham/' + props.item_info.hinh_san_pham} className="img-responsive" alt="" />
                </div>
            </Link>
        </li>
    );
};

export default ProductItem;