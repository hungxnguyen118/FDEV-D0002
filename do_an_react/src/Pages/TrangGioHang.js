import React, { Component } from 'react';
import Slider from '../Module/Slider/Slider';
import FormGioHang from '../Module/FormGioHang';

class TrangGioHang extends Component {
    render() {
        return (
            <>
                <Slider />

                <div className="container include_table_gio_hang">
                    <FormGioHang />
                </div>
            </>
        );
    }
}

export default TrangGioHang;