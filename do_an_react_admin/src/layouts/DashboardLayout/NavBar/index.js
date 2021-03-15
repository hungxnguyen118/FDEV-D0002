import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ReceiptIcon from '@material-ui/icons/Receipt';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const [cookies] = useCookies(['token']);
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [items] = useState([
    {
      href: '/app/dashboard',
      icon: BarChartIcon,
      title: 'Dashboard'
    },
    {
      href: '/app/truy-xuat-don-hang',
      icon: ReceiptIcon,
      title: 'Truy Xuất Đơn Hàng'
    },
    {
      href: '/app/customers',
      icon: UsersIcon,
      title: 'Customers'
    },
    {
      href: '/app/users',
      icon: UsersIcon,
      title: 'User\'s Accounts'
    },
    {
      href: '/app/products',
      icon: ShoppingBagIcon,
      title: 'Products'
    },
    {
      href: '/app/account',
      icon: UserIcon,
      title: 'Account'
    },
    {
      href: '/app/settings',
      icon: SettingsIcon,
      title: 'Settings'
    },
    {
      href: '/login',
      icon: LockIcon,
      title: 'Login'
    },
    {
      href: '/register',
      icon: UserPlusIcon,
      title: 'Register'
    },
    {
      href: '/app/test',
      icon: UserPlusIcon,
      title: 'Test'
    },
    {
      href: '/app/quan-ly-san-pham',
      icon: ShoppingBagIcon,
      title: 'Quản lý sản phẩm'
    },
    {
      href: '/app/phan-quyen',
      icon: SupervisorAccountIcon,
      title: 'Quản lý Phân Quyền'
    },
    {
      href: '/404',
      icon: AlertCircleIcon,
      title: 'Error'
    }
  ]);
  const [permission, setPermission] = useState([]);

  useEffect(() => {
    if (cookies && cookies.token) {
      axios.post('http://localhost:4000/user/admin-authorized', {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${cookies.token}`
          }
        })
        .then((response) => {
          console.log(response);
          setPermission(items.filter((item) => {
            return response.data.permission.find((vy) => {
              return item.href.includes(vy.alias);
            });
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate('/login', { replace: true });
    }
  }, []);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {permission.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Need more?
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Upgrade to PRO version and access 20 more screens
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          <Button
            color="primary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
          >
            See PRO version
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
