import React, { useState } from 'react';
import {
  TextField
} from '@material-ui/core';
import axios from 'axios';
import DanhSachDonHang from './Results';

const FormTruyXuatDonHang = () => {
  const [madonhang, setMaDonHang] = useState('');
  const [listDonHang, setListDonHang] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(madonhang);
    if (madonhang.length >= 16) {
      axios.get(`http://localhost:4000/don-hang/tim-kiem/${madonhang}`)
        .then((response) => {
          console.log(response);
          setListDonHang(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('Mã đơn hàng quá ngắn');
    }
  };

  const handleChange = (e) => {
    setMaDonHang(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          helperText="Mã Đơn Hàng"
          label="Mã Đơn Hàng"
          margin="normal"
          name="madonhang"
          onChange={handleChange}
          value={madonhang}
          variant="outlined"
        />
      </form>
      <DanhSachDonHang donhangs={listDonHang} />
    </>
  );
};

export default FormTruyXuatDonHang;
