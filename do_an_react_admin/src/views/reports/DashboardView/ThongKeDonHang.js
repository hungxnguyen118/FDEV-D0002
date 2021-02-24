import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Select,
  InputLabel,
  MenuItem
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ThongKeDonHang = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [numberDayOfMonth, setNumberOfMonth] = useState([]);
  const [data1, setData1] = useState([]);

  const [year, setYear] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [listyear] = useState([2016, 2017]);

  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: data1,
        label: ''
      }
    ],
    labels: numberDayOfMonth
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const handleChangeDataChart = (paramyear) => {
    axios.get(`http://localhost:4000/dashboard/don-hang-so-thang/${paramyear}`)
      .then((response) => {
        console.log(response);
        setNumberOfMonth(response.data);

        axios.get(`http://localhost:4000/dashboard/don-hang/${paramyear}`)
          .then((response1) => {
            console.log(response1);
            setData1(response1.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setYear(event.target.value);

    handleChangeDataChart(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleChangeDataChart(2016);
  }, []);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={year}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {listyear.map((itemyear) => {
          return (<MenuItem value={itemyear}>{itemyear}</MenuItem>);
        })}
      </Select>
      {year}
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

ThongKeDonHang.propTypes = {
  className: PropTypes.string
};

export default ThongKeDonHang;
