import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const TrangTruyXuatDonHang = () => {
    const param = useParams();

    useEffect(() => {
        console.log(param);

        axios.get('http://localhost:4000/don-hang/' + param.ma_truy_xuat_dh)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default TrangTruyXuatDonHang;