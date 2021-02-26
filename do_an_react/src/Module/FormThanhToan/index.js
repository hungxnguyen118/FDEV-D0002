import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function BasicTextFields() {
    const [DataForm, setDataForm] = useState({
        ho_ten: '',
        email: '',
        dien_thoai_nguoi_nhan: '',
        dia_chi_nguoi_nhan: ''
    });

    const [ThongTinGioHang, setThongTinGioHang] = useState([]);

    const classes = useStyles();

    const handleSubmitForm = (event) => {
        event.preventDefault();
        //console.log('send form');
        console.log(ThongTinGioHang);

        var post_data = DataForm;
        post_data.chi_tiet_don_hang = ThongTinGioHang;

        axios.post('http://localhost:4000/don-hang/',post_data)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleChangeInput = (event) => {
        //console.log(event.target.name, event.target.value);
        setDataForm({
            ...DataForm,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        var string_mang_gio_hang = localStorage.getItem('gio_hang');
        //console.log(string_mang_gio_hang);

        if(typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null){
            //console.log(JSON.parse(string_mang_gio_hang));
            var list_gio_hang = JSON.parse(string_mang_gio_hang);
            var list_chi_tiet_don_hang = [];

            list_gio_hang.forEach((item, index) => {
                list_chi_tiet_don_hang[index] = {
                    ma_san_pham: item.ma,
                    ten_san_pham: item.ten_san_pham,
                    so_luong: item.so_luong,
                    don_gia: item.don_gia,
                    thanh_tien: item.don_gia * item.so_luong
                };
            })

            setThongTinGioHang(list_chi_tiet_don_hang);
        }
    }, [])

    return (
        <div>
            <div>
                Form Thanh Toán
            </div>
            <div>
                <form noValidate autoComplete="off" onSubmit={handleSubmitForm}>
                    <div className={classes.root}>
                        <TextField id="ho_ten" name="ho_ten" label="Họ tên" onChange={handleChangeInput} value={DataForm.ho_ten} variant="outlined" />
                    </div>
                    <div className={classes.root}>
                        <TextField id="email" name="email" label="Email" onChange={handleChangeInput} value={DataForm.email} variant="outlined" />
                    </div>
                    <div className={classes.root}>
                        <TextField id="dien_thoai_nguoi_nhan" name="dien_thoai_nguoi_nhan" label="Điện thoại" onChange={handleChangeInput} value={DataForm.dien_thoai_nguoi_nhan} variant="outlined" />
                    </div>
                    <div className={classes.root}>
                        <TextField id="dia_chi_nguoi_nhan" name="dia_chi_nguoi_nhan" label="Địa chỉ" onChange={handleChangeInput} value={DataForm.dia_chi_nguoi_nhan} variant="outlined" />
                    </div>
                    <div className={classes.root}>
                        <Button variant="contained" color="primary" type="submit">
                            Đặt Hàng
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}