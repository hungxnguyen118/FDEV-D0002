import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';

const Xbox = (props) => {

    const [an_hien_hinh, setAnHienHinh] = useState(true);
    const [mang_gio_hang, setMangGioHang] = useState([]);

    useEffect(() => {
        //console.log(props.item_current);
        var string_mang_gio_hang = localStorage.getItem('gio_hang');

        if(typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null){
            //console.log(string_mang_gio_hang);
            var temp = JSON.parse(string_mang_gio_hang);
            console.log(temp);
            setMangGioHang(temp);
        }

    }, [])

    const handleClick = (e) => {
        // console.log('đã click vào ReadMore Xbox Component');
        // console.log(e);

        // setAnHienHinh(false);

        var mang_gio_hang_temp = mang_gio_hang;
        
        if(mang_gio_hang_temp.length > 0){
            var flag_co_trong_gio_hang_hay_khong = false;

            for(var i = 0; i< mang_gio_hang_temp.length; i++){
                if(mang_gio_hang_temp[i].ma == props.item_current.ma){
                    mang_gio_hang_temp[i].so_luong += 1;
                    flag_co_trong_gio_hang_hay_khong = true;
                    break;
                }
            }

            if(flag_co_trong_gio_hang_hay_khong === false){
                var item_temp = props.item_current;
                item_temp.so_luong = 1;
                mang_gio_hang_temp.push(item_temp);
            }

        }
        else{
            var item_temp = props.item_current;
            item_temp.so_luong = 1;
            mang_gio_hang_temp.push(item_temp);            
        }

        console.log(mang_gio_hang_temp);

        localStorage.setItem('gio_hang', JSON.stringify(mang_gio_hang_temp));

    }

    return (
        <Box className="x-box">
            <div className="container">
            <div className="x-box_sec">
                <div className="col-md-7 x-box-left">
                <h2>{props.item_current.ten_san_pham}</h2>
                <h3>{props.item_current.so_lan_xem}</h3>
                <div dangerouslySetInnerHTML={{__html: props.item_current.mo_ta_chi_tiet}}>
                </div>
                <div>{props.item_current.don_gia}</div>
                <a className="hvr-bounce-to-top" onClick={handleClick}>Buy now</a>
                </div>
                {
                    (an_hien_hinh)?
                    <div className="col-md-5 x-box-right">
                        <img src={'images/san_pham/' + props.item_current.hinh_san_pham} className="img-responsive" alt="" />
                    </div>
                    :
                    <></>
                }
                
                <div className="clearfix"></div>
            </div>
            </div>
        </Box>
    );
};

export default Xbox;