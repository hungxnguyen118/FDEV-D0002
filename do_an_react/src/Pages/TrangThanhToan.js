import React, { Component } from 'react';
import Slider from '../Module/Slider/Slider';
import FormReviewGioHang from '../Module/FormReviewGioHang';
import { Grid } from '@material-ui/core';
import FormThanhToan from '../Module/FormThanhToan';

class TrangThanhToan extends Component {
    render() {
        return (
            <>
                <Slider />

                <div className="container include_table_gio_hang">
                    
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <FormThanhToan />
                        </Grid>

                        <Grid item xs={6}>
                            <FormReviewGioHang />
                        </Grid>
                    </Grid>

                </div>
            </>
        );
    }
}

export default TrangThanhToan;