import React from 'react';

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="footer-grids">
                    <div className="col-md-3 ftr-info">
                    <h3>About Us</h3>
                    <p>Sed faucibus mollis laoreet. Sed vehicula faucibus tristique lectus a orci molestie finibus.
                        Suspendisse pharetra, metus sed rutrum pretium.</p>
                    </div>
                    <div className="col-md-3 ftr-grid">
                    <h3>Categories</h3>
                    <ul className="ftr-list">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Racing</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Simulation</a></li>
                        <li><a href="#">Bike</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3 ftr-grid">
                    <h3>Platform</h3>
                    <ul className="ftr-list">
                        <li><a href="#">Pc</a></li>
                        <li><a href="#">Ps4</a></li>
                        <li><a href="#">XBOX 360</a></li>
                        <li><a href="#">XBOX ONE</a></li>
                        <li><a href="#">PSP</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3 ftr-grid">
                    <h3>Information</h3>
                    <ul className="ftr-list">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Wish Lists</a></li>
                        <li><a href="#">Site Map</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
        
        <div className="copywrite">
            <div className="container">
            <p> © 2015 Game Box. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
            </div>
        </div>
        </>
    );
};

export default Footer;