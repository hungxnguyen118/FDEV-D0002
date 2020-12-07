import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonGoToGioHang extends Component {
    render() {
        return (
            <>
                <Link to="/gio-hang">
                    <div className="button_gio_hang">
                        
                        <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                        
                    </div>
                </Link>
            </>
        );
    }
}

export default ButtonGoToGioHang;