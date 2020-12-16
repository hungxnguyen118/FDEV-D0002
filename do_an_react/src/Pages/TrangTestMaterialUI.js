import React, { useState } from 'react';

import TransferList from '../Module/TestMaterialUI/TransferList';
import {CircularProgress, Button, Dialog, DialogTitle } from '@material-ui/core/';

import Pagination from '@material-ui/lab/Pagination';

import Slider from '../Module/Slider/Slider';
import ExampleDialog from '../Module/TestMaterialUI/ExampleDialog';
import ExampleToolstip from '../Module/TestMaterialUI/ExampleToolstip';
import ExampleAutocomplete from '../Module/TestMaterialUI/ExampleAutocomplete';
import ExampleRating from '../Module/TestMaterialUI/ExampleRating';

const TrangTestMaterialUI = () => {

    const [mang_data, SetMangData] = useState([
        [
            "Hung Nguyen",
            "Dang Pham",
            "Thu Huynh",
            "Luan Tran",
            "Phu Nguyen"
        ],
        [
            "Tai Mach",
            "Son Nguyen",
            "Loc Phung",
            "Luan Nguyen",
            "Xuan Nguyen"
        ],
        [
            "Dat Nguy",
            "Vy Le",
            "Khoa Tran",
            "Sieu Ba Vong",
            "Tung Nguyen"
        ],
    ])

    const [cur_page, setCurPage] = useState(0);

    const handleChangePage = (event, value) => {
        console.log(value);
        setCurPage(value - 1);
    }

    return (
        <div>
            <Slider />

            {/* <TransferList /> */}
            {/* <CircularProgress /> */}

            {/* <ExampleDialog /> */}

            {/* <ExampleToolstip /> */}


            {/* {
                mang_data[cur_page].map(hoten => 
                    <div>{hoten}</div>    
                )
            }

            <Pagination count={mang_data.length} color="secondary" onChange={handleChangePage} /> */}

            <ExampleAutocomplete />

            <ExampleRating />
            
            
        </div>
    );
};

export default TrangTestMaterialUI;