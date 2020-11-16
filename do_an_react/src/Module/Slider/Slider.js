import React from 'react';

const Slider = () => {
    return (
        <div className="slider">
        <div className="callbacks_container">
          <ul className="rslides" id="slider">

            <div className="slid banner1">
              <div className="caption">
                <h3>Donec id diam nec ex luctus congue nec sed mi.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pellentesque ex. Morbi
                  iaculis mi in varius auctor. Nullam feugiat erat ex, eu vehicula velit efficitur non.</p>
              </div>
            </div>


            <div className="slid banner2">
              <div className="caption">
                <h3>Pellentesque eu ante quis elit interdum cursus.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pellentesque ex. Morbi
                  iaculis mi in varius auctor. Nullam feugiat erat ex, eu vehicula velit efficitur non.</p>
              </div>
            </div>


            <div className="slid banner3">
              <div className="caption">
                <h3>Fusce id urna ut felis feugiat fringilla sed quis nisl.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pellentesque ex. Morbi
                  iaculis mi in varius auctor. Nullam feugiat erat ex, eu vehicula velit efficitur non.</p>
              </div>
            </div>

          </ul>
        </div>
      </div>
    );
};

export default Slider;