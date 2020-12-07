import React, { Component } from 'react';
import Slider from '../Module/Slider/Slider';
import Content from '../Module/Content/Content';
import Lastest from '../Module/Lastest/Lastest';

class TrangChu extends Component {
    render() {
        return (
            <>
                <Slider />

                <Content />

                <Lastest />
            </>
        );
    }
}

export default TrangChu;