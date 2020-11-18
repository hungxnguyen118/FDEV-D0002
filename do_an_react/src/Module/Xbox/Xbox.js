import React, { useState } from 'react';

const Xbox = () => {

    const [an_hien_hinh, setAnHienHinh] = useState(true);

    const handleClick = (e) => {
        console.log('đã click vào ReadMore Xbox Component');
        console.log(e);

        setAnHienHinh(false);
    }

    return (
        <div className="x-box">
            <div className="container">
            <div className="x-box_sec">
                <div className="col-md-7 x-box-left">
                <h2>XBOX 360</h2>
                <h3>Suspendisse ornare nisl et tellus convallis, non vehicula nibh convallis.</h3>
                <p>Proin ornare metus eros, quis mattis lorem venenatis eget. Curabitur eget dui
                    euismod, varius nisl eu, pharetra lacus. Sed vehicula tempor leo. Aenean dictum suscipit magna
                    vel tempus.
                    Aliquam nec dui dolor. Quisque scelerisque aliquet est et dignissim.</p>
                <a className="hvr-bounce-to-top" onClick={handleClick}>Read More</a>
                </div>
                {
                    (an_hien_hinh)?
                    <div className="col-md-5 x-box-right">
                        <img src="images/xbox.jpg" className="img-responsive" alt="" />
                    </div>
                    :
                    <></>
                }
                
                <div className="clearfix"></div>
            </div>
            </div>
        </div>
    );
};

export default Xbox;