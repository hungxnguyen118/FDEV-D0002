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
                if(mang_gio_hang_temp[i].id == props.item_current.id){
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
                <h2>{props.item_current.title}</h2>
                <h3>{props.item_current.type}</h3>
                <p>Proin ornare metus eros, quis mattis lorem venenatis eget. Curabitur eget dui
                    euismod, varius nisl eu, pharetra lacus. Sed vehicula tempor leo. Aenean dictum suscipit magna
                    vel tempus.
                    Aliquam nec dui dolor. Quisque scelerisque aliquet est et dignissim.</p>
                <div>{props.item_current.price}</div>
                <a className="hvr-bounce-to-top" onClick={handleClick}>Buy now</a>
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
        </Box>
    );
};

export default Xbox;