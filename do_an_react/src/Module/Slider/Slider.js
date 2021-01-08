import React, { useEffect } from 'react';

//import $ from 'jquery';

const Slider = () => {
  
    return (
        
        <div id="carousel-id" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-id" data-slide-to="0" className=""></li>
                <li data-target="#carousel-id" data-slide-to="1" className="active"></li>
            </ol>
            <div className="carousel-inner">
                <div className="item">
                    <img alt="First slide" src="/images/bnr2.jpg" />
                </div>
                <div className="item active">
                    <img alt="Second slide" src="/images/bnr3.jpg" />
                </div>
            </div>
            <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
            <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
        </div>
        
    );
};

export default Slider;