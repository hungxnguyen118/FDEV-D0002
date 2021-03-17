import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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
  FormControlLabel,
  makeStyles,
  withStyles
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {
    children,
    classes,
    onClose,
    ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, danhsachphanquyen, ...rest }) => {
  const classes = useStyles();
  const [selectedDonHangIds, setSelectedDonHangIds] = useState([]);
  const [page, setPage] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [dsQuyenHienTai, setdsQuyenHienTai] = useState([]);
  const [quyenduocchon, setQuyenDuocChon] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedDonHangIds;

    if (event.target.checked) {
      newSelectedDonHangIds = danhsachphanquyen.map((phanquyen) => phanquyen.ma);
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

  const handleLimitChange = () => {
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = (idquyen) => {
    setQuyenDuocChon(idquyen);
    axios.get(`http://localhost:4000/phan-quyen/${idquyen}`)
      .then((results) => {
        setdsQuyenHienTai(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(true);
  };

  const handleSavePhanQuyen = () => {
    console.log('save');
    axios.put(`http://localhost:4000/phan-quyen/${quyenduocchon}`, dsQuyenHienTai)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProcessChangeCheckBox = (event) => {
    console.log(event.target.name);
    if (dsQuyenHienTai.find((itemquyenhientai) => itemquyenhientai.alias === event.target.name)) {
      console.log('co');
      setdsQuyenHienTai(dsQuyenHienTai.filter((itemquyenhientai) => {
        return itemquyenhientai.alias !== event.target.name;
      }));
    } else {
      console.log('khong');
      const dataitem = {
        alias: event.target.name
      };
      setdsQuyenHienTai([...dsQuyenHienTai, dataitem]);
    }
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
                    checked={selectedDonHangIds.length === danhsachphanquyen.length}
                    color="primary"
                    indeterminate={
                      selectedDonHangIds.length > 0
                      && selectedDonHangIds.length < danhsachphanquyen.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Mã quyền
                </TableCell>
                <TableCell>
                  Tên quyền
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {danhsachphanquyen.map((phanquyen) => (
                <TableRow
                  hover
                  key={phanquyen.id}
                  selected={selectedDonHangIds.indexOf(phanquyen.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedDonHangIds.indexOf(phanquyen.id) !== -1}
                      onChange={(event) => handleSelectOne(event, phanquyen.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {phanquyen.id}
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary" onClick={() => { handleClickOpen(phanquyen.id); }}>
                      {phanquyen.ten_quyen}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {
            dsQuyenHienTai.map((quyenhientai) => {
              return <div>{ quyenhientai.ten_menu }</div>;
            })
          }
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Menu có quyền quản trị
            </DialogTitle>
            <DialogContent dividers>
              {
                rest.dsmenuquantri.map((menuquantri) => {
                  return (
                    <FormControlLabel
                      key={menuquantri.id}
                      control={(
                        <Checkbox
                          name={menuquantri.alias}
                          onChange={handleProcessChangeCheckBox}
                          checked={Boolean(dsQuyenHienTai.find((data) => {
                            return data.alias === menuquantri.alias;
                          }))}
                        />
                      )}
                      label={menuquantri.ten_menu}
                    />
                  );
                })
              }
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleSavePhanQuyen} color="primary">
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={danhsachphanquyen.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={10}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  danhsachphanquyen: PropTypes.array.isRequired
};

export default Results;
