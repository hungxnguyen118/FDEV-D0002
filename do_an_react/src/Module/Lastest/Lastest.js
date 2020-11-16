import React from 'react';

const Lastest = () => {
    return (
        <div className="latest">
            <div className="container">
            <div className="latest-games">
                <h3>Latest Games</h3>
                <span></span>
            </div>
            <div className="latest-top">
                <div className="col-md-5 trailer-text">
                <div className="sub-trailer">
                    <div className="col-md-4 sub-img">
                    <img src="images/v2.jpg" alt="img07" />
                    </div>
                    <div className="col-md-8 sub-text">
                    <a href="#">Killzone: Shadow Fall for PlayStation 4 Reviews</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi…</p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="sub-trailer">
                    <div className="col-md-4 sub-img">
                    <img src="images/v1.jpg" alt="img07" />
                    </div>
                    <div className="col-md-8 sub-text">
                    <a href="#"> Spiderman 2 Full Version PC Game</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi…</p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="sub-trailer">
                    <div className="col-md-4 sub-img">
                    <img src="images/v3.jpg" alt="img07" />
                    </div>
                    <div className="col-md-8 sub-text">
                    <a href="#">Sega's: Jet Set for Andriod Play Store 4 Reviews</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi…</p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                </div>
                <div className="col-md-7 trailer">
                <iframe src="https://www.youtube.com/embed/V5-DyoVlNOg?list=PLiVunv1pnIs2c0ORVqY60K3n8XMO9CoGp"
                    ></iframe>
                </div>
                <div className="clearfix"> </div>
            </div>
            </div>
        </div>
    );
};

export default Lastest;