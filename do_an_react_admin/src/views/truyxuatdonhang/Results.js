import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, donhangs, ...rest }) => {
  const classes = useStyles();
  const [selectedDonHangIds, setSelectedDonHangIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedDonHangIds;

    if (event.target.checked) {
      newSelectedDonHangIds = donhangs.map((donhang) => donhang.ma);
    } else {
      newSelectedDonHangIds = [];
    }

    setSelectedDonHangIds(newSelectedDonHangIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedDonHangIds.indexOf(id);
    let newSelectedDonHangIds = [];

    if (selectedIndex === -1) {
      newSelectedDonHangIds = newSelectedDonHangIds.concat(selectedDonHangIds, id);
    } else if (selectedIndex === 0) {
      newSelectedDonHangIds = newSelectedDonHangIds.concat(selectedDonHangIds.slice(1));
    } else if (selectedIndex === selectedDonHangIds.length - 1) {
      newSelectedDonHangIds = newSelectedDonHangIds.concat(selectedDonHangIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedDonHangIds = newSelectedDonHangIds.concat(
        selectedDonHangIds.slice(0, selectedIndex),
        selectedDonHangIds.slice(selectedIndex + 1)
      );
    }

    setSelectedDonHangIds(newSelectedDonHangIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedDonHangIds.length === donhangs.length}
                    color="primary"
                    indeterminate={
                      selectedDonHangIds.length > 0
                      && selectedDonHangIds.length < donhangs.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Mã đơn hàng
                </TableCell>
                <TableCell>
                  Thông tin người mua
                </TableCell>
                <TableCell>
                  Danh sách sản phẩm mua
                </TableCell>
                <TableCell>
                  Ngày mua
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {donhangs.slice(0, limit).map((donhang) => (
                <TableRow
                  hover
                  key={donhang.ma}
                  selected={selectedDonHangIds.indexOf(donhang.ma) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedDonHangIds.indexOf(donhang.ma) !== -1}
                      onChange={(event) => handleSelectOne(event, donhang.ma)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      {donhang.ma_truy_xuat_dh}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <div>
                      Họ tên:
                      {donhang.ho_ten_nguoi_nhan}
                    </div>
                    <div>
                      Email:
                      {donhang.email}
                    </div>
                    <div>
                      Số điện thoại:
                      {donhang.dien_thoai_nguoi_nhan}
                    </div>
                    <div>
                      Địa chỉ:
                      {donhang.dia_chi_nguoi_nhan}
                    </div>
                  </TableCell>
                  <TableCell>
                    {donhang.list_san_pham.map((sanpham) => {
                      return (<div>{`${sanpham.ten_san_pham}-${sanpham.so_luong}-${sanpham.don_gia}-${sanpham.thanh_tien}`}</div>);
                    })}
                    <div>{donhang.tong_tien}</div>
                  </TableCell>
                  <TableCell>
                    {moment(donhang.ngay_tao).format('DD/MM/YYYY HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={donhangs.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  donhangs: PropTypes.array.isRequired
};

export default Results;
